import React from "react";


export default function Paginated({currentPage, productsPerPage, products, paginado }) {

 

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if(currentPage - 1 > 0){
      (paginado(currentPage - 1))
    }
  }

  const handlePage = number => {
    paginado(number)
  }

  const handleNext = () => {
    if(currentPage + 1 <= pageNumbers.length){
      paginado(currentPage + 1)
    }
  }
  
  

  return (
    <nav className="flex justify-center	items-center my-8">
      <ul className="flex justify-around font-bold justify-items-center py-0 w-64">
        
      {currentPage !== 1 ? (
        <button
        className=" m-1 text-xl px-2"
        onClick={() => handlePrev()}>
        &laquo;
        </button>
        ) : null}

        
      
        

        {pageNumbers.map(number => (
          
               <button 
               className={currentPage === number ? "bg-green-500 hover:bg-grenn-700 rounded-full py-1 px-3" : null}
               key={number} 
               onClick={() => handlePage(number) }>
               {number}
               </button>
              

        ))}
        


        {currentPage < pageNumbers.length ? (
          <button
          className=" m-1 text-xl px-2"
          onClick={() => handleNext()}>
          &raquo;
          </button>
        ) : null}
      </ul>
    </nav>
  );
}
