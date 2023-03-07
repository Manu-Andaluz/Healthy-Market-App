import React from 'react';
import { useEffect } from 'react';

export const  LogginSuccess = ()=> {
    useEffect(() => {
        setTimeout(() => {
            window.close();
        }, 1000)
    }, [])

    return (<div className='container mx-auto xl:px-32 fixed inset-0 flex items-center justify-center fixed inset-0 bg-gray-200 z-50 '>
        <h1 className='text-grisLetter font-sans text-4xl md:text-base mb-8 font-bold '>
        Thanks for loggin in!
        </h1>
        </div>)
}

export default LogginSuccess