import React from "react";

export default function Paginated({ productsPerPage, products, paginado }) {
  const pageNumbers = [];
  console.log(products);
  console.log(productsPerPage);
  for (let i = 1; i <= Math.ceil(products / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center	items-center bg-lime-600 mt-5">
      <ul className="flex justify-around font-bold justify-items-center py-0 w-64">
        <li>
          <a href="#"><span>&laquo;</span></a>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  paginado(number);
                }}
              >
                {" "}
                {number}
              </a>
            </li>
          ))}
        <li>
          <a href="#"><span>&raquo;</span></a>
        </li>
      </ul>
    </nav>
  );
}
