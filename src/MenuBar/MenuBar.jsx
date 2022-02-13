import React from 'react'
import './MenuBar.css'
import logo from './img/logo.png'
export default () => {
    return (
<div className='container-defaultbj'>
    <div className='logo'>
    <img src={logo} className="logodf" alt="IbukiCloud Logo"></img>
    </div>
    <div classname="menulist">
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href='http://storage.ibukicloud.tk:90/'>Storage</a></li>
            <li><a href=''>Minecraft Servers</a></li>
            <li><a href='https://github.com/luizantoniofx/ibukicloud-documentation'>Server Documentation</a></li>
            <li><a href=''>TODO5</a></li>
            <li><a href='https://github.com/luizantoniofx'>Github</a></li>
        </ul>
    </div>
</div>
    )
}