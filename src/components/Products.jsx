//this is the code in which we will fetch the products an display it
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Loading from "./Loading";
import Pagination from "./Pagination";

import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";


const Products = () => {
  const [data, setData] = useState([]);                                     //this state is used to fetch the data and stores in the array
  const [filter, setFilter] = useState([]);                                 //this state is used to store the filtered data based on the category
  const [loading, setLoading] = useState(false);                           //manages the loading state while loading the data
  const [currentPage, setCurrentPage] = useState(1);                       //keeps the track of the  current page Number
  const [productsPerPage] = useState(6);                                   //it specifies the total number of items per page
  const [sortByPriceAsc, setSortByPriceAsc] = useState(true);              // State to track sorting order
  const [sortButtonText, setSortButtonText] = useState("Sort by Price");        //this state will manages that if we click on the button that has written on it "sort by price" will get changed to either "asc" or "desc" 

  const dispatch = useDispatch();                                              //this allow us to send or bring("dispatch") an action [function]

  const addProduct = (product) => {                                           //here in this function we passes the product ["product"] that we want to add to cart and will get sends to Reducer function via Dispatch
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const productsData = await response.json();                                 //here we have converted the fetched the  data into the JSON data and this also aynchrounos function
      setData(productsData);                                                     //now we have added the all the data into the data[] array with "setData"
      setFilter(productsData);                                                  
      setLoading(false);                                                        //when the all the data fetched no need to show "skeleton"
    };  

    getProducts();                                                             //exec. the funct.
  }, []);





  const filterProduct = (category) => {                                           //here in this code we have implemented the filter functionality using "filter" method
    const updatedList = data.filter((item) => item.category === category);          //so here the thing is we implimwnting filter method on the "data" array and if "category" [comes from Button] matches the item.category then fill the Data [] with that
    setFilter(updatedList);
  };

  const sortByPrice = () => {
    const sortedProducts = [...filter];                                         //here we have copies all the array from the filter so we can't mutate it
    sortedProducts.sort((a, b) => {
      if (sortByPriceAsc) {                                                   //so the thing here is that we passes the two arguments "a,b" that represents the two arguments of the array the "a" reprents first[prior to B] and "b" reprents the second one, so the thing happens that is the "asc" state is true then it will checks this condition "a.price - b.price" means this had to be positive if any a - b is negative then sort() will automatically put that element disguided as "b" will put ahead of "a"                     
        return a.price - b.price;      //(this had to be positive)
      } else {
        return b.price - a.price;
      }
    });
    setFilter(sortedProducts);                                             //here we have also updated the "setFilter" property bcse we also want "sort" propery to be applied in filter product also ==> means in Men product we can also provides the sorting()
    setSortByPriceAsc(!sortByPriceAsc);                                     //here we have changes the button name after the click also
    setSortButtonText(sortByPriceAsc ? "Sort by Price (Ascending)" : "Sort by Price (Descending)");          //here we have changes the button name after the click also
  }; 

  
const Bclass="btn btn-outline-dark btn-sm m-2"
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className={Bclass} onClick={() => setFilter(data)}>
            All
          </button>
          <button className={Bclass} onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button className={Bclass} onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className={Bclass} onClick={() => filterProduct("jewelery")}>
            Jewelery
          </button>
          <button className={Bclass} onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
          <button className={Bclass} onClick={sortByPrice}>
            {sortButtonText}
          </button>
        </div>

        <div className="row">
          {currentProducts.map((product) => (                                   //here map function will iterate over each element of the array
            <div key={product.id} className="col-md-3 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" >
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...                   {/*the title should be not more than 12*/}
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn  m-1" style={{background:"#FF33B8", color:'white'}}>
                    Buy Now
                  </Link>
                  <button className="btn  m-1" onClick={() => addProduct(product)} style={{background:"#FF33B8", color:'white'}}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;                // means the currentPage=1 and Ppp=6 1X6=6 means last product of the id=6 but we knoes as below calculation it should be  but this can be baneficial in Slice method
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;       // here if iOfLast=6 and productsPage=6 then 6-6 means 0 then in array its first object
  const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);  //here we have added the slice method to the "filter" state means filtered products

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center" style={{fontWeight:'500', color:'#FF33B8'}}>Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts  />}                   {/*ternary op.*/}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filter.length / productsPerPage)}
        paginate={paginate}
      />
    </div>
  );
};

export default Products;
