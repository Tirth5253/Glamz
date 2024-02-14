import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { addCart, addLike, removeLike } from "../redux/action";
import { Link } from "react-router-dom";
import { Footer, Navbar } from '../components';

const LikedItems = () => {
  const likedProducts = useSelector(state => state.handleLike.likedProducts || []);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const handleLikeClick = (productId, product) => {
    if (isLiked(productId)) {
      dispatch(removeLike(productId));
    } else {
      dispatch(addLike(product));
    }
  };

  const isLiked = (productId) => {
    return likedProducts.some(product => product.id === productId);
  };

  return (
    <div>
    <Navbar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-10 mt-10">

      {likedProducts.length > 0 ? (
        // <p>No liked products</p>
        likedProducts.map((product) => (
          
          <div key={product.id} className="mb-4">
                  <h1 className='font-bold text-4xl text-pink-500 mb-4'>Liked Products</h1>
            <div className="p-2 border-2 border-pink-300 rounded-xl bg-slate-100" style={{ height: '500px' }}>
              <div className="flex justify-items-center justify-center">
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
                <button className="m-1 border-2 w-24 h-10 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-400 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out" onClick={() => addProduct(product)}>Add to Cart</button>
                <button className="m-1 border-2 w-10 h-10 rounded-xl flex items-center justify-center text-center bg-transparent text-pink-400 hover:text-pink-700 transition duration-300 ease-in-out" onClick={() => handleLikeClick(product.id, product)}>
                  {isLiked(product.id) ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='flex gap-6'>
          
        <p className='text-4xl text-pink-500 text-center font-bold'>No liked Items</p>
        <Link to={"/" } className="m-1 border-2 w-24 h-20 border-pink-500 rounded-xl flex items-center justify-center text-center bg-pink-400 text-white hover:bg-white hover:text-pink-500 transition duration-300 ease-in-out">Go to HomePage</Link>
        </div>
      )}
    </div>
 
    </div>
  );
};

export default LikedItems;
