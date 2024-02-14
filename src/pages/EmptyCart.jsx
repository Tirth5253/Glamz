import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 py-5 bg-gray-200 text-center">
        <h4 className="p-3 text-3xl" style={{ color: "#ff33b8" }}>
          Your Cart is Empty
        </h4>
        <Link
          to="/"
          className="btn mx-4 border border-pink-500 text-pink-500 py-2 px-4 rounded inline-block"
        >
          <i className="fa fa-arrow-left"></i> Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
