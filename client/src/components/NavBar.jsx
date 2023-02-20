import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import logo from "../pictures/logo2.png";



export default function NavBar(){
    const dispatch = useDispatch()

    
    return(
        <nav className='bg-green2 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" className="flex items-center">
            <img
                src={logo}
                className="h-14 pr-4 text-4xl"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-continuo">
                Healthy market app
              </span>
            </a>
            
            </div>

        </nav>
    )
}