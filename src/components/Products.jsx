import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart ,addLike,removeLike} from "../redux/action";
import Loading from "./Loading";
import Pagination from "./Pagination";
import { debounce } from 'lodash';
import TrendingProducts from "./TrendingProducts";
import FeaturedProducts from "./FeaturedProducts"; 
import ShowProducts from "./ShowProducts";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [sortByPriceAsc, setSortByPriceAsc] = useState(true);
  const [sortButtonText, setSortButtonText] = useState("Sort by Price");
  const [searchTerm, setSearchTerm] = useState("");
  
  const likedProducts = useSelector(state => state.handleLike.likedProducts || []);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const handleLikeClick = (productId,product) => {
    if (isLiked(productId)) {
      dispatch(removeLike(productId)); 
    } else {
      dispatch(addLike(product)); 
    }
  };

  const isLiked = (productId) => {
    return likedProducts.some(product => product.id === productId);
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const productsData = await response.json();
      setData(productsData);
      setFilter(productsData);
      setLoading(false);
    };
    getProducts();
  }, []);

  const filterProduct = (category) => {
    const updatedList = data.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    setFilter(updatedList);
  };

  const sortByPrice = () => {
    const sortedProducts = [...filter];
    sortedProducts.sort((a, b) => { 
      if (sortByPriceAsc) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilter(sortedProducts);
    setSortByPriceAsc(!sortByPriceAsc);
    setSortButtonText(sortByPriceAsc ? "Sort by Price (Asc)" : "Sort by Price (Desc)");
  };

  const handleSearch = debounce((searchValue) => {
    setSearchTerm(searchValue);
    const filteredProducts = data.filter(product =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilter(filteredProducts);
  }, 1000);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center font-bold text-pink-500 text-4xl mb-3">Trending Products</h2>
          <hr />
          <TrendingProducts data={data} />
          <h2 className="display-5 text-center font-bold text-pink-500 text-4xl mb-3 mt-8">Value For Money Products</h2>
          <hr />
          <FeaturedProducts data={data} /> 
          <h2 className="display-5 text-center font-bold text-pink-500 text-4xl mb-3 mt-8">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-center">
        {loading ? <Loading /> : <ShowProducts currentProducts={currentProducts} addProduct={addProduct} handleLikeClick={handleLikeClick} isLiked={isLiked} setFilter={setFilter} data={data}  filterProduct={filterProduct} sortByPrice={sortByPrice} sortButtonText={sortButtonText} handleSearch={handleSearch} />}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filter.length / productsPerPage)}
        paginate={paginate}
      />
      <div className="row justify-center">
        <div className="col-12">
        </div>
      </div>  
    </div>
  );
};

export default Products;
