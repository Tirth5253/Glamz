import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <nav>
      <ul className="flex justify-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className={`mx-1 ${
              currentPage === index + 1 ? "bg-pink-500" : "bg-gray-300"
            }`}
          >
            <button
              onClick={() => paginate(index + 1)}
              className="px-3 py-2 text-white font-bold"
             
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
