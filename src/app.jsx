import React from 'react'
import './app.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuBar from './MenuBar/MenuBar'
import BodyDefault from './BodyDefault/BodyDefault'
import ServerStatus from './ServerStatus/ServerStatus'
import Footer from './Footer/Footer'
import Particles from "react-tsparticles"
import UpdatesPath from './UpdatesPath/UpdatesPath'
import MessageTop from './MessageTop/MessageTop'


{/* Main Website content under here  */}

const App = () => {
    return (
        <div className='container-default'>
        
        <div className='ParticlesD'> {/* TSParticles Div so the const ParticlesV can be imported */}
            <ParticlesV/>
        </div>

            <div className="menu">
                <MenuBar/>
            </div>

        <main className="defaultpg">
            <BodyDefault/>
        </main>
        <div className='updates'>
                <UpdatesPath/>
            </div>

            <div className='servers'>
                <ServerStatus/>
            </div>
            <div className='messagetop'>
                <MessageTop/>
            </div>
            
            <div className='footer'>
                <Footer/>
            </div>
    </div>
    )
}

{/* TSParticles Settings until I decide to move them to a new .json file but for now they are
going to stay here :D not like I'm bothered by it */}

const ParticlesV = () => {
    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { //Both onClick and onHover disabled to not cause problems but hey...you can do whatever you want
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#8A8A8A",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false, //True or false it doesn't matter but I find false better for my website.
              },
              move: {
                direction: "left",
                enable: true,
                outMode: "out", //Use out or bounce. Out is better as it will leave the screen and "repeat" bounce will well...bounce
                random: false,
                speed: 8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 500,
                },
                value: 90,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 4,
              },
            },
            detectRetina: false,
          }}
        />
      );
  };

{/* React Router */}

{/* Default export don't mess with it :D */}
export default App