import React from 'react'
import food from "../pictures/food.gif"




export default function Loading(){
    return(
        <div className=''>
            <div className=''>
            <img className='object-center bg-white-300 min-h-0' src={food} alt="loading"  />
            </div>
        </div>
    )
}