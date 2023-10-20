import { Route, Routes } from "react-router";
import Welcome from "./view/welcome/Welcome";
import Products from "./view/products/Products";
import Favourites from "./view/favourites/Favourites";
import Cart from "./view/cart/Cart";
import Header from "./view/components/Header/Header";
import Footer from "./view/components/Footer/Footer";
import Product from "./view/products/product/Product";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}
