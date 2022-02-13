import React from 'react'
import './BodyDefault.css'
export default () => {
    return (
        <div className='default_pg'>
            <h1 className='title'>Welcome to the IbukiCloud New Website!</h1>
            <PostTX />
        </div>
)
}

const PostTX = () =>{
    return <p>This is the first time I'm actually making a react project without using any library (like Bootstrap) it's not as good as I expected but at least it's good enough to serve as a homepage for my homelab projects! Here you will find anything related to wha I call IbukiCloud infraestructure but also random stuff I may post in my blog about new technologies and new things I'm trying.
        Hope you enjoy it as much as I am and if you are up to contribute I'm all ears for anything you have in mind! Peace.
    </p>;
    };