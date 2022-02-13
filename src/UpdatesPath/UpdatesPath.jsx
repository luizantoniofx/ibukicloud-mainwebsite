import React from 'react'
import './UpdatesPath.css'
export default () => {
    return (
        <div className='default-up'>
            <h1>Updates:</h1>
            <PostTX/>
        </div>
    )
}

const PostTX = () =>{
    return <p>13/02/2022 - This is the first version of IbukiCloud Website.</p>;
    };