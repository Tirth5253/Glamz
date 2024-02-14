import React from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const ShowProducts = ({ currentProducts, addProduct, handleLikeClick, isLiked ,setFilter,data,filterProduct, sortByPrice,sortButtonText,handleSearch }) => {
  return (
    <>
      <div className="buttons text-center py-5">
          <button className="border-2 border-pink-500 rounded-lg w-10 h-10 bg-pink-500 text-white m-2 hover:text-pink-500 hover:bg-white transition duration-300 ease-in-out" onClick={() => setFilter(data)}>All</button>
          <button className="border-2 border-pink-500 rounded-lg w-36 h-10 bg-pink-500 text-white m-2 hover:text-pink-500 hover:bg-white transition duration-300 ease-in-out" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="border-2 border-pink-500 rounded-lg w-36 h-10 bg-pink-500 text-white m-2 hover:text-pink-500 hover:bg-white transition duration-300 ease-in-out" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="border-2 border-pink-500 rounded-lg w-20 h-10 bg-pink-500 text-white m-2 hover:text-pink-500 hover:bg-white transition duration-300 ease-in-out" onClick={() => filterProduct("jewelery")}>Jewelry</button>
          <button className="border-2 border-pink-500 rounded-lg w-39 h-10 bg-pink-500 text-white m-2 hover:text-pink-500 hover:bg-white transition duration-300 ease-in-out" onClick={() => filterProduct("electronics")}>Electronics</button>
          <button className="border-2 border-pink-500 rounded-lg w-40 h-10 bg-pink-500 text-white m-2 hover:text-pink-500 hover:bg-white transition duration-300 ease-in-out" onClick={sortByPrice}>{sortButtonText}</button>
          <div className="flex justify-center py-3">
          <div className="flex border-b border-pink-600 w-1/4">
            <input
              className="w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none"
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value )}
            />
            <SearchOutlinedIcon className="text-pink-600" />
          </div>
        </div>
        </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-10 mt-10">
        {currentProducts.map((product) => (
          <div key={product.id} className="mb-4">
            <div className="p-2 border-2 border-pink-300 rounded-xl bg-slate-100" style={{ height: '500px' }}>
              {/* Product details */}
              <div className="flex justify-items-center justify-center">
                <img className="card-img-top mt-2" src={product.image} alt="Product" style={{ height: "300px", objectFit: "cover" }} />
              </div>
              <div className="card-body">
                <h5 className="text-3xl text-pink-500 font-semibold flex justify-center mb-2 mt-2">{product.title.substring(0, 16)}...</h5>
                <hr/>
                <p className="text-sm flex text-center text-gray-600">{product.description.substring(0, 90)}...</p>
              </div>
              <ul>
                <li className="text-xl flex font-bold text-pink-500 justify-center mb-2">$ {product.price}</li>
              </ul>
              <div className="card-body flex justify-center">
                <Link to={"/product/" + product.id} className="m-1 border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-400 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out">Buy Now</Link>
                <button className="m-1 border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-400 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out" onClick={() => addProduct(product)}>Add to Cart</button>
                <button className="m-1 border-2 w-10 h-10 rounded-xl flex items-center justify-center text-center bg-transparent text-pink-400 hover:text-pink-700 transition duration-300 ease-in-out" onClick={() => handleLikeClick(product.id,product)}>
                  {isLiked(product.id) ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowProducts;
