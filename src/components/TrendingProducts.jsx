import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";

const TrendingProducts = ({ data }) => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-10 mt-10">
        {data.map((product) => (
          product.rating.rate >= 4.5 && (
            <div key={product.id} className="mb-4">
              <div className="p-2 border-2 border-pink-300 rounded-xl bg-slate-100" style={{ height: '500px' }}>
                <div className="flex justify-items-center justify-center relative">
                  <span className="absolute mt-2 bg-blue-500 text-white px-3 py-2 font-bold text-sm border-2 border-blue-500 rounded-xl flex left-0 top-0 animate-pulse">Trending</span>
                  <img className="card-img-top mt-2" src={product.image} alt="Product" style={{ height: "300px", objectFit: "cover" }} />
                </div>
                <div className="card-body">
                  <h5 className="text-3xl text-pink-500 font-semibold flex justify-center mb-2 mt-2">{product.title.substring(0, 16)}...</h5>
                  <hr />
                  <p className="text-sm flex text-center text-gray-600">{product.description.substring(0, 90)}...</p>
                </div>
                <ul>
                  <li className="text-xl flex font-bold text-pink-500 justify-center mb-2">$ {product.price}</li>
                </ul>
                <div className="card-body flex justify-center">
                  <Link to={"/product/" + product.id} className="m-1 border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-400 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out">Buy Now</Link>
                  <button className="m-1 border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-400 text-white  hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out" onClick={() => addProduct(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </>
  );
};

export default TrendingProducts;
