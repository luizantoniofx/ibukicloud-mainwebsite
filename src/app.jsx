import React from 'react'
import './app.css'
import MenuBar from './MenuBar/MenuBar'
import BodyDefault from './BodyDefault/BodyDefault'

const App = () => {
    return (
        <div className='container-default'>
            <div className="menu">
                <MenuBar/>
            </div>

        <main className="defaultpg">
            <BodyDefault/>
        </main>
        <footer><p>IbukiCloud 2022 - Made with React</p></footer>
    </div>
    )
}
export default App