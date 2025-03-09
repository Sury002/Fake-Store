import React from "react";

const CartModal = ({ cart, removeFromCart, closeModal }) => {
  // Calculate total number of products
  const totalProducts = cart.length;

  // Calculate total cost
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <h2 className="text-xl font-bold mb-4 text-black">Your Cart</h2>

        {/* Cart Items (Scrollable) */}
        <div className="overflow-y-auto flex-grow">
          {cart.length === 0 ? (
            <p className="text-black">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="border-b py-2 flex justify-between items-center"
                >
                  <div className="flex items-center flex-grow-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-black">{item.title}</h3>
                      <p className="text-gray-700">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 flex-shrink-0"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Total Products and Total Cost */}
        <div className="mt-4 pt-4 border-t">
          <p className="text-black font-semibold">
            Total Products: {totalProducts}
          </p>
          <p className="text-black font-semibold">
            Total Cost: ${totalCost.toFixed(2)}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;