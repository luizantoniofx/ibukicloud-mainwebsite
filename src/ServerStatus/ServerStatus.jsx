import React from 'react'
import './ServerStatus.css'
export default () => {
    return (
        <div className='default_sv'>
            <h1 className='sv'>Services Status:</h1>
            <PostTX />
            <h1 className='nodes'>Server Nodes:</h1>
            <ServerNames />
            <h1 className='virt'>Virtualization Engines:</h1>
            <Virt_Engine />
        </div>
)
}

const PostTX = () =>{
    return <p>
        <br></br>
        <h3>Nextcloud (Moltencore):</h3>
        <span className='nx'>Online</span>
        <br></br>
        <h3>Website (This):</h3>
        <span className='rx'>Online</span>
        <h3>Node-red (MoltenCore)</h3>
        <span className='nr'>Offline</span>
        <br></br>
        <h3>Minecraft Servers</h3>
        <span className='mcdot'>Status coming soon.</span>
        </p>;
    };

const ServerNames = () => {
    return <p>
        <h3>Moltencore:</h3>
        <span className='molten'>Online</span>
        <br></br>
        <h3>Zuldazar:</h3>
        <span className='zul'>Offline</span>
        <h3>Daggerfall:</h3>
        <span className='dgf'>Online</span>
        <br></br>
        <h3>Dragonblight:</h3>
        <span className='dbl'>Online</span>
        <h3>Durotar:</h3>
        <span className='dur'>Offline</span>
        <br></br>
        <h3>Maelstrom:</h3>
        <span className='dbl'>Offline</span>
    </p>
}

const Virt_Engine = () => {
    return <p>
        <h3>VMware Services</h3>
        <span className='vmw'>Online</span>
        <h3>Docker</h3>
        <span className='dck'>Not implemented</span>
    </p>
}