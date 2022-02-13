import React from 'react'
import './app.css'
import MenuBar from './MenuBar/MenuBar'
import BodyDefault from './BodyDefault/BodyDefault'
import ServerStatus from './ServerStatus/ServerStatus'
import Footer from './Footer/Footer'
import Particles from "react-tsparticles";

const App = () => {
    return (
        <div className='container-default'>
        
        <div className='ParticlesD'>
            <ParticlesV/>
        </div>

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

const ParticlesV = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
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
                onClick: {
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
                enable: false,
              },
              move: {
                direction: "left",
                enable: true,
                outMode: "out",
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
export default App