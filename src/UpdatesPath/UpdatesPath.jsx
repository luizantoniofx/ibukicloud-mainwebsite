import React from 'react'
import './UpdatesPath.css'
export default () => {
    return (
        <div className='default-up'>
            <h1 className='title_up'>Updates:</h1>
            <PostTX/>
        </div>
    )
}

const PostTX = () =>{
    return <p>
        14/02/2022 - Added placeholders for some stuff while finishing API.
        <br></br>
        13/02/2022 - This is the first version of IbukiCloud Website.
        </p>;
    };