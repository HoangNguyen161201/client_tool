import React from 'react';
import img from './../../../assets/image/404.png';
export default function File404() {
    return (
        <div className='page404'>
            <img src={img} alt="img"/>
            <div className="infor">
                <p className="error">404</p>
                <h2 className='h2'>Oops!</h2>
                <p className="error1">Sorry, an error has occured, requrested page not found!</p>
                <a className='a' href="/">Back to home</a>
            </div>
        </div>
    )
}
