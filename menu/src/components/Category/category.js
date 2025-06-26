import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./category.css";

// التصنيفات
export const categories = [
  { label: "الكل", value: "best-foods" },
  { label: "شواء", value: "bbqs" },
  { label: "خبز", value: "breads" },
  { label: "برغر", value: "burgers" },
  { label: "شوكولاتة", value: "chocolates" },
  { label: "حلويات", value: "desserts" },
  { label: "مشروبات", value: "drinks" },
  { label: "دجاج مقلي", value: "fried-chicken" },
  { label: "آيس كريم", value: "ice-cream" },
  { label: "بيتزا", value: "pizzas" },
  { label: "سندويشات", value: "sandwiches" },
  { label: "نقانق", value: "sausages" },
  { label: "ستيك", value: "steaks" }
];


export default function Category({ onSelectCategory }) {
  const [activeCat, setActiveCat] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

 const handleSelect = (cat) => {
  setActiveCat(cat.label); // هذا لعرضه فقط
  if (onSelectCategory) onSelectCategory(cat.value); // ✅ نمرر القيمة (مثل: "desserts")
  setDropdownOpen(false);
};

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="d-block d-md-none category-dropdown-wrapper px-3 mt-3" dir="rtl">
        <div
          className="dropdown-header"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>{categories.find((c) => c.value === activeCat)?.label || "الكل"}</span>
          <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>▼</span>
        </div>

        {dropdownOpen && (
          <ul className="dropdown-list">
            {categories.map((cat) => (
              <li key={cat.value} onClick={() => handleSelect(cat)}>
                {cat.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Buttons */}
      <Row className="d-none d-md-flex justify-content-center mt-3 px-2">
        {categories.map((cat) => (
          <Col xs={6} md={3} lg={2} key={cat.value} className="mb-2 text-center">
            <button
              className={`btn w-100 border ${
                activeCat === cat.value ? "btn-main" : "btn-outline-main"
              }`}
              onClick={() => handleSelect(cat)}
            >
              {cat.label}
            </button>
          </Col>
        ))}
      </Row>
    </>
  );
}
