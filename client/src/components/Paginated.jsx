import React from "react";

export default function Paginated({productsPerPage, products, paginado}){
    const pageNumbers = []
    console.log(products)
    console.log(productsPerPage)
    for (let i = 1; i <= Math.ceil(products/productsPerPage); i++) {
        pageNumbers.push(i);
        
    }

    return(
        <nav className="flex justify-center	items-center bg-lime-600 py-0">
            <ul className="flex justify-around font-bold justify-items-center py-0 w-64">
                <li><a href="#">Prev</a></li>
                {pageNumbers && 
                   pageNumbers.map(number => (
                    <li key={number}>
                        <a href="#" onClick={(e) =>{ e.preventDefault(); paginado(number)}}> {number}</a>
                    </li>
                ))}
                <li><a href="#" >Next</a></li>
            </ul>
        </nav>
    )

}