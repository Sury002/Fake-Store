import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products from the Fake Store API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Add a product to the cart
  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Open the cart modal
  const openCartModal = () => setIsModalOpen(true);

  // Close the cart modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      {/* Navbar */}
      <Navbar cartCount={cart.length} openCartModal={openCartModal} />

      {/* Product Grid */}
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              isInCart={cart.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      {isModalOpen && (
        <CartModal cart={cart} removeFromCart={removeFromCart} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;