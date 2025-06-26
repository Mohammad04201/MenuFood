import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Col, Card } from "react-bootstrap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ استدعاء المسار

export default function AnimatedCard({ item, index, handleImageError }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const location = useLocation(); // ✅ الحصول على المسار الحالي

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  if (!item) return null;

  return (
    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Card className="menu-card shadow-sm border-0 h-100">
          <div className="image-container">
            <Card.Img
              variant="top"
              src={item.imgUrl}
              className="img-item"
              alt={item.title}
              onError={handleImageError}
            />
          </div>
          <Card.Body className="text-end d-flex flex-column justify-content-between">
            <div>
              <Card.Title className="item-title">{item.title}</Card.Title>
              <Card.Text className="item-description">
                {item.description}
              </Card.Text>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-start gap-2 mb-3">
                <span className="old-price">{item.oldPrice} د.أ</span>
                <span className="item-price">{item.newPrice} د.أ</span>
              </div>

              {/* ✅ عرض الزر فقط إذا ما كانت الصفحة الرئيسية */}
              {location.pathname !== "/" && (
                <button className="btn btn-main w-100">اطلب الآن</button>
              )}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
}
