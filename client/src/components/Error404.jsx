import React from 'react'
import sad from "../pictures/triste.png"


export default function Error404(){
    return(
        <div>
            <h3 className='text-9xl text-center'>404</h3>
            <img className='place-items-center h-72 mx-auto' src={sad} alt="triste" />
        <div>
        <p className='text-center '>Lo sentimos. La página que estás buscando no se encuentra disponible</p>
        </div>
        </div>
    )
}