import { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { categories } from "../components/Category/category";
import "../style/menuForm.css"
export default function MenuForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgUrl: "",
    newPrice: "",
    oldPrice: "",
    category: "all",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    console.log("🚀 البيانات:", formData);
    setFormData({
      title: "",
      description: "",
      imgUrl: "",
      newPrice: "",
      oldPrice: "",
      category: "all",
    });
  };

  return (
    <Card className="p-4 mt-4">
      <h4 className="mb-3 text-end">إضافة صنف جديد</h4>
      <Form onSubmit={handleSubmit} dir="rtl">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formTitle">
              <Form.Label>العنوان</Form.Label>
              <Form.Control
                type="text"
                placeholder="مثلاً: بيتزا مارجريتا"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formImage">
              <Form.Label>رابط الصورة</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://image.url"
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formDesc">
          <Form.Label>الوصف</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="مثلاً: تحتوي على جبنة ومكونات طازجة"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formOldPrice">
              <Form.Label>السعر القديم (اختياري)</Form.Label>
              <Form.Control
                type="number"
                placeholder="مثلاً: 10"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formNewPrice">
              <Form.Label>السعر الجديد</Form.Label>
              <Form.Control
                type="number"
                placeholder="مثلاً: 7"
                name="newPrice"
                value={formData.newPrice}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>التصنيف</Form.Label>
          <Form.Select
  name="category"
  value={formData.category}
  onChange={handleChange}
  className="form-select text-end custom-select"
  dir="rtl"
>
  {categories.map((cat) => (
    <option key={cat.value} value={cat.value}>
      {cat.label}
    </option>
  ))}
</Form.Select>
        </Form.Group>

        <Button variant="main" type="submit" className="mt-2 w-100 btn-main">
          حفظ الصنف
        </Button>
      </Form>
    </Card>
  );
}
