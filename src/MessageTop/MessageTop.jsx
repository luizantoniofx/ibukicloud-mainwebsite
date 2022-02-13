import React from 'react'
import './MessageTop.css'
export default () => {
    return (
        <div className='message-tp'>
            <Lorem/>
        </div>
    )
}

const Lorem = () =>{
    return <p><span class="msgofday"> Message of the day:</span> For now there's nothing to see here. May <a class="quotelink" href='https://elderscrolls.fandom.com/wiki/Akatosh'>akatosh</a> 🐉 guide you</p>;
    };