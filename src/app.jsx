import React from 'react'
import './app.css'
import MenuBar from './MenuBar/MenuBar'
import BodyDefault from './BodyDefault/BodyDefault'
import ServerStatus from './ServerStatus/ServerStatus'
import Footer from './Footer/Footer'

const App = () => {
    return (
        <div className='container-default'>
            <div className="menu">
                <MenuBar/>
            </div>

        <main className="defaultpg">
            <BodyDefault/>
        </main>
        <div className='servers'>
            <ServerStatus/>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
    )
}
export default App