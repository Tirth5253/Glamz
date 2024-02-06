import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';  

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
            <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/" style={{ color: '#FF33B8' }}>GLAMZ</NavLink><p style={{alignItems:'center', marginTop:'10px', marginLeft:'0', paddingLeft:'0', color:'gray'}}>© CopyRight 2024. All Rights Recieved</p>

                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="naxvbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center fw-bold">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        
                    </ul>
                    <div className="buttons text-center " style={{ color: '#FF33B8' }}>
                       
                        <NavLink to="/cart" className="btn  m-2" style={{ color: '#FF33B8',border:'1px solid     #FF33B8' }}><i className="fa fa-cart-shopping mr-1 " style={{ color: '#FF33B8' }}></i> Cart [{state.length}] </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar