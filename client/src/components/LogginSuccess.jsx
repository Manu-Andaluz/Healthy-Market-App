import React from 'react';
import { useEffect } from 'react';

export const  LogginSuccess = ()=> {
    useEffect(() => {
        setTimeout(() => {
            window.close();
        }, 1000)
    }, [])

    return (<div>Thanks for loggin in!</div>)
}

export default LogginSuccess