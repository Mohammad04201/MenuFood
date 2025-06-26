import { useEffect, useState } from "react";
import { Col, Row, Card, Placeholder, Container } from "react-bootstrap";

import "./cardList.css";
import { fetchData } from "../../data/apiData";
import AnimatedCard from "../Animation/animationCard";


// 🔻 أضف prop جديد: visibleCount
export default function CardList({ category = "all", searchTerm = "", visibleCount = null }) {
  const [itemsData, setItemsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        await fetchData(setItemsData, category);
      } catch (error) {
        console.error("⚠️ fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [category]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(itemsData);
    } else {
      const filtered = itemsData.filter((item) =>
        (item.title + " " + item.description)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, itemsData]);

  const handleImageError = (index) => {
    setFilteredData((prev) => prev.filter((_, i) => i !== index));
  };

  const renderSkeletonCard = (_, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="menu-card shadow-sm border-0 h-100">
        <div
          className="image-container bg-light bg-opacity-50"
          style={{ height: "180px" }}
        />
        <Card.Body className="text-end d-flex flex-column justify-content-between">
          <div>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />
            </Placeholder>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-start gap-2 mb-3">
              <Placeholder xs={3} />
              <Placeholder xs={3} />
            </div>
            <Placeholder.Button variant="secondary" xs={12} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  // 👇 التعديل هنا: اقتصاص العناصر حسب visibleCount (إذا موجود)
  const itemsToRender = visibleCount ? filteredData.slice(0, visibleCount) : filteredData;

  return (
    <Container fluid className="overflow-hidden">
      <Row className="justify-content-center mt-4 gx-2 gy-3">
        {loading
          ? [...Array(8)].map(renderSkeletonCard)
          : itemsToRender.length > 0
          ? itemsToRender.map((item, index) => (
              <AnimatedCard
                key={index}
                item={item}
                index={index}
                handleImageError={() => handleImageError(index)}
              />
            ))
          : <h2 className="text-center">لا يوجد نتائج</h2>}
      </Row>
    </Container>
  );
}
