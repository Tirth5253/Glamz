import React from "react";
import { Link } from "react-router-dom";

const ShowProduct = ({ product, addProduct, loading }) => {

  const renderStars = () => {
    const rating = product.rating && product.rating.rate;
    const roundedRating = Math.round(rating * 10) / 10;
    const fullStars = Math.floor(roundedRating);
    const fractionalPart = roundedRating - fullStars;
    const fillPercentage = Math.round(fractionalPart * 100);
    const fullStarElements = [];

    for (let i = 0; i < fullStars; i++) {
      fullStarElements.push(<i key={i} className="fa fa-star"></i>);
    }

    let lastStarElement = null;

    if (fillPercentage > 0 && fillPercentage < 100) {
      lastStarElement = (
        <i
          key="half"
          className="fa fa-star "
          style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
        ></i>
      );
    } else if (fillPercentage === 100) {
      lastStarElement = <i key="full" className="fa fa-star"></i>;
    }

    return (
      <div className="flex">
        <div>{fullStarElements}</div>
        <div className="relative top-0 mt-0">
          <i className="fa fa-star-o top-0 "></i>
          <div className="absolute top-0">{lastStarElement}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="container my-5 py-2">
      <div className="flex flex-col md:flex-row px-24 gap-24">
        <div className="md:w-1/3 md:h-1/3 py-3">
          <img className="" src={product.image} alt={product.title} />
        </div>
        <div className="md:w-1/2 py-5">
          <h4 className="text-lg text-gray-600 uppercase">
            {product.category}
          </h4>
          <h1 className="text-3xl text-pink-500 my-2 font-semibold mb-2">
            {product.title}
          </h1>
          <p className="text-xl flex gap-2">
            {renderStars()}
            {product.rating && product.rating.rate}
          </p>
          <h3 className="text-4xl my-4 font-semibold text-pink-500">
            ${product.price}
          </h3>
          <p className="text-lg text-gray-500 mb-3">{product.description}</p>
          <div className="flex">
            <button
              className="m-1 border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-500 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="m-1 border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-500 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
