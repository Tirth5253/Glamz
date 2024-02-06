import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {          //currentPage=currentPage, totalPages: total numbers of pages to display All products ,Paginate==> it updates the "currentPage" state in Products
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }).map((_, index) => (            //so here we have used the Array.from() ==> so here "Array" is a built in counstructor of Js array and .from is its method, so here we have used the ".from()" method to generate the initial array by the length here it is totalPages , the first element in Map is "_" which is basically a function to apply each element "PlaceHolde" means we dont use it 
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`} //here we have written the condition that if "currentPage===index+1" so +1 means the index start from 0 and our page is from 1 so thats why
          >
            <button
              onClick={() => paginate(index + 1)}
              className="page-link"
              style={{ color: "#FF33B8" }}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
