import { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar/navbar";
import Heder from "./components/heder";
import Category from "./components/Category/category";
import CardList from "./components/CardList/cardList";

import MenuForm from "./pages/MenuForm";
import { Routes, Route, useLocation } from "react-router-dom"; // أضف useLocation
import Home from "./pages/Home";
import Slider from "./components/slider/slider";

function App() {
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();  

  const handleSelectCategory = (selectedCat) => {
    setCategory(selectedCat);
  };

  return (
    <div className="color-body font">
      <Navbar onSearch={setSearchTerm} />

      {/*  عرض السلايدر فقط في الصفحة الرئيسية */}
      {location.pathname === "/" && <Slider />}

      <Container>
        <Routes>
          <Route
            path="/menu"
            element={
              <>
                <Heder />
                <Category onSelectCategory={handleSelectCategory} />
                <CardList category={category} searchTerm={searchTerm} />
              </>
            }
          />
          <Route path="/add" element={<MenuForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
