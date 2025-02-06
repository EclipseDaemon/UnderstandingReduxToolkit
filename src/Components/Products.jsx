import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = [
    {
      title: "T-shirt",
    },
    {
      title: "Jeans",
    },
    {
      title: "Hoodies",
    },
    {
      title: "Cargo-Pants",
    },
    {
      title: "Shirts",
    },
  ];

  const addToCartHandler = (productTitle) => {
    dispatch(addToCart(productTitle));
  };

  return (
    <>
      <h2 className="text-center font-bold text-3xl">All Products</h2>
      <div className="pt-11 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="border-2 text-center">
            <p className="py-5">{product.title}</p>
            <button
              className="w-full bg-green-500 py-1 cursor-pointer duration-300 hover:bg-red-500"
              onClick={() => addToCartHandler(product.title)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
