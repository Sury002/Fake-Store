import React from "react";

const Navbar = ({ cartCount, openCartModal }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Fake Store</h1>
      <button onClick={openCartModal} className="relative">
        <span className="text-2xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;