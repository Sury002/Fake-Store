import React from "react";

const ProductCard = ({ product, addToCart, isInCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white flex flex-col h-full">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold text-black flex-grow">
        {product.title}
      </h2>

      {/* Product Price */}
      <p className="text-gray-700 mt-2">${product.price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        disabled={isInCart}
        className={`mt-4 w-full py-2 ${
          isInCart ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white rounded`}
      >
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>

      {/* Alert for Already Added Item */}
      {isInCart && (
        <p className="text-red-500 text-sm mt-2">Item already added to the cart</p>
      )}
    </div>
  );
};

export default ProductCard;