import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./pages/All";
import Furniture from "./pages/Furniture";
import Electronics from "./pages/Electronics";
import Lamps from "./pages/Lamps";
import Kitchen from "./pages/Kitchen";
import Chairs from "./pages/Chairs";
import Skincare from "./pages/Skincare";

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

        <Route path="/categories" element={<Categories />}>
          <Route path="/categories/all" element={<All />} />
          <Route path="/categories/furniture" element={<Furniture />} />
          <Route path="/categories/electronics" element={<Electronics />} />
          <Route path="/categories/lamps" element={<Lamps />} />
          <Route path="/categories/kitchen" element={<Kitchen />} />
          <Route path="/categories/chairs" element={<Chairs />} />
          <Route path="/categories/skincare" element={<Skincare />} />
        </Route>

        <Route path="/categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
