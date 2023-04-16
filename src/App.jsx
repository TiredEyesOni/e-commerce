import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => setCartItem([...cartItem, item]);

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) setCartItem(savedCart);
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/e-commerce/" element={<Home />} />

        <Route path="/e-commerce/categories" element={<Categories />} />

        <Route
          path="/e-commerce/categories/product/:id"
          element={<ProductPage />}
        />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
