import React from "react";

export default function Paginated({ productsPerPage, products, paginado }) {
  const pageNumbers = [];
  console.log(products);
  console.log(productsPerPage);
  for (let i = 1; i <= Math.ceil(products / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center	items-center my-8">
      <ul className="flex justify-around font-bold justify-items-center py-0 w-64">
        <li>
          <button>
            <span>&laquo;</span>
          </button>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  paginado(number);
                }}
              >
                {" "}
                {number}
              </button>
            </li>
          ))}
        <li>
          <button>
            <span>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
