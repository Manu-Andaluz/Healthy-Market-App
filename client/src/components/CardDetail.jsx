import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { findProductById } from "../actions/productActions";

const CardDetail = () =>{
    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productDet = useSelector((state) => state.productDetail);
    console.log(productDet);

    useEffect(() => {
        dispatch(findProductById(productId));
      }, []);


      return (
        <div>
            A
        </div>
      
      );
    };

    export default CardDetail;
