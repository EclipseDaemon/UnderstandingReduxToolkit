import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shopCart.cart);

  return (
    <>
      <h2 className="text-3xl font-bold text-center">Cart</h2>
      <div className="pt-11">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <div
              key={cartItem.id}
              className="flex items-center justify-between border-2 rounded-lg px-3 py-1 mb-7"
            >
              <div className=" flex justify-between flex-col">
                <p className="text-lg font-bold">Item: {cartItem.title}</p>
                <span>Quantity: {cartItem.quantity}</span>
              </div>
              <div className="bg-red-500 p-3 rounded-full duration-300 hover:bg-green-500">
                <button
                  className="cursor-pointer"
                  onClick={() => dispatch(removeItemFromCart(cartItem.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-center font-bold">Your Cart is Empty</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
