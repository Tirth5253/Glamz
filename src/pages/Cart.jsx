import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-screen bg-gradient-to-b from-gray-200 to-white">
        <div className="container py-5 mx-auto">
          <div className="flex justify-center my-4">
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded shadow-md">
                <div className="p-4 border-b">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="p-4">
                  {state.map((item) => (
                    <div key={item.id} className="flex items-center mb-4">
                      <div className="w-1/4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full rounded"
                        />
                      </div>
                      <div className="w-1/2 flex flex-col justify-center">
                        <p className="font-bold">{item.title}</p>
                        <div className="flex items-center my-2">
                          <button
                            className="btn"
                            onClick={() => removeItem(item)}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <p className="mx-5">{item.qty}</p>
                          <button
                            className="btn"
                            onClick={() => addItem(item)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p>
                          <span className="text-muted">{item.qty}</span> x $
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <div className="bg-white rounded shadow-md">
                <div className="p-4 bg-gray-100 border-b">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="p-4">
                  <ul className="list-group">
                    <li className="flex justify-between items-center border-b pb-2">
                      Products ({totalItems})
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <strong>Total amount</strong>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                  <Link to="/" className="btn btn-dark mt-4 block w-full">
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
