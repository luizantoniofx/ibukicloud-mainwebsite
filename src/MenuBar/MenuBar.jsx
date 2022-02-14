import React from 'react'
import './MenuBar.css'
import logo from './img/logo.png'
export default () => {
    return (
<div className='container-defaultbj'>
    <div className='logo'>
    <img src={logo} className="logodf" alt="IbukiCloud Logo"></img> {/* Logo separated from menu because it caused me problems.*/}
    </div>
    <div classname="menulist">
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href='http://storage.ibukicloud.tk:90/'>Cloud Storage</a></li>
            <li><a href='./'>Minecraft Servers</a></li>
            <li><a href='https://github.com/luizantoniofx/ibukicloud-documentation'>Server Documentation</a></li>
            <li><a href='http://blog.ibukicloud.tk:90/'>Blog and Updates</a></li>
            <li><a href='https://github.com/luizantoniofx'>My Github</a></li>
            <li><a href='http://blog.ibukicloud.tk:90/2022/02/13/technologies-used-website-and-others/'>Tecnologies Used (Website)</a></li>
        </ul>
    </div>
</div>
    )
}