import React from 'react'
import './MessageTop.css'
export default () => {
    return (
    <div className='DefaultERR'>
        <h1>ERROR 404</h1>
        <SecretPage/>
    </div>
    )
}

const SecretPage = () =>{
    return <p>Someone found a secret page!</p>;
    };