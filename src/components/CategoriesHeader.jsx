import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link
              to="/e-commerce/categories/all"
              onClick={() => handleBtnName("all")}
            >
              <button>All</button>
            </Link>
            <Link to="/e-commerce/categories/furniture">
              <button onClick={() => handleBtnName("furnitures")}>
                Furnitures
              </button>
            </Link>
            <Link to="/e-commerce/categories/electronics">
              <button onClick={() => handleBtnName("electronics")}>
                Electronics
              </button>
            </Link>
            <Link to="/e-commerce/categories/lamps">
              <button onClick={() => handleBtnName("lamps")}>Lamps</button>
            </Link>
            <Link to="/e-commerce/categories/kitchen">
              <button onClick={() => handleBtnName("kitchen")}>Kitchen</button>
            </Link>
            <Link to="/e-commerce/categories/chairs">
              <button onClick={() => handleBtnName("chairs")}>Chairs</button>
            </Link>
            <Link to="/e-commerce/categories/skincare">
              <button onClick={() => handleBtnName("skin care")}>
                Skin Care
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;