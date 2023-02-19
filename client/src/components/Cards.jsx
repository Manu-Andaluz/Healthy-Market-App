import React from 'react';
import { productsFetch } from '../actions/productActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";


const Cards = () =>{
const dispatch = useDispatch();
const navigate = useNavigate();
const products = useSelector ((state) => state.allProducts)


useEffect(()=>{
    dispatch(productsFetch());
},[])

    console.log(products)
return(
<h1>
    {
        products && products.allProducts.map(product => {
            return (
                <div>
                    {product.name}
                    <img src={product.image.url} />
                </div>
            )
        })
    }
</h1>

)
};

export default Cards;
