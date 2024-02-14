import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';  

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const state1 = useSelector(state =>  state.handleLike.likedProducts);

    return (
        <nav className="bg-white shadow-lg ">
            <div className="container mx-auto    px-4">
                <div className="flex justify-between items-center   py-3">
                    <NavLink to="/" className="font-bold text-5xl text-pink-500 flex items-center">GLAMZ  <p className="text-gray-500 text-sm pl-2  align-middle justify-items-center">© CopyRight 2024. All Rights Received</p></NavLink>
                    
                    <button className="block lg:hidden border border-pink-500 px-3 py-1 rounded text-pink-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 0h20v2H0zM0 8h20v2H0zM0 16h20v2H0z"></path></svg>
                    </button>
                    <div className="hidden lg:flex items-center">
                        <ul className="flex space-x-4 text-pink-500 font-semibold">
                            <li><NavLink to="/" className="hover:text-pink-700">Home</NavLink></li>
                            <li><NavLink to="/product" className="hover:text-pink-700">Products</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-pink-700">About</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-pink-700">Contact</NavLink></li>
                        </ul>
                        <NavLink to="/cart" className="ml-4 bg-pink-500 text-white px-4 py-2 rounded-full">{`Cart [${state.length}]`}</NavLink>
                        <NavLink to='/Like' className="ml-4 bg-pink-500 text-white px-4 py-2 rounded-full">{`Liked [${state1 && state1.length ? state1.length : 0}]`}</NavLink>
                        {console.log(state1.length)}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
