import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";
import Loading from "./Loading";
import Loading2 from "./Loading2";

import ShowProduct from "./ShowProduct";
import ShowSimilarProduct from "./ShowSimilarProduct";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const getSimilarProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${product.category}`
      );
      const data = await response.json();
      setSimilarProducts(data);
      setLoading2(false);
    };

    if (product.category) {
      getSimilarProducts();
    }
  }, [product.category]);

  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <ShowProduct product={product} addProduct={addProduct} loading={loading} />
        )}
        <div className="my-5 py-5">
          <div className="hidden md:block">
            {loading2 ? (
              <Loading2 />
            ) : (
              <ShowSimilarProduct
                similarProducts={similarProducts}
                addProduct={addProduct}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
