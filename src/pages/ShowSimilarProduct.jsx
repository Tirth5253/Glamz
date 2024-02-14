import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowSimilarProduct = ({ similarProducts, addProduct }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className="container my-5 py-5">
      <h2 className="text-center text-5xl text-pink-400 font-semibold mb-5">
        You may also Like
      </h2>
      <hr className="bg-pink-500 mb-8" />
      <Slider {...settings} className="gap-3">
        {similarProducts.map((item) => (
          <div key={item.id} className="p-2 border-2 border-pink-300 rounded-xl mx-4 text-center ">
            <div className="flex justify-items-center justify-center">
              <img
                className="p-3 mt-2"
                src={item.image}
                alt="Card"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-2xl text-pink-500 font-semibold flex justify-center mb-2 mt-2">
                {item.title.substring(0, 15)}...
              </h5>
            </div>
            <div className="card-body flex justify-center gap-2 px-2">
              <Link
                to={"/product/" + item.id}
                className="border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-400 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out"
              >
                Buy Now
              </Link>
              <button
                className="border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-400 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out"
                onClick={() => addProduct(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShowSimilarProduct;
