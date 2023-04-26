import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import {Model} from './MOdel'
import Texts from './Texts'
// import weALT from '../public/weALTt.PNG'
// import { Text } from "@react-three/drei"
import Navigation from './components/Navigation'
import { Html } from '@react-three/drei'
import About from './components/About'



function App() {
  const [count, setCount] = useState(0)
  // bg-[#ebe534]

  return (
    <>
    <div className='app bg-[#ebe534] w-[100vw] h-[100vh]'>

     <Navigation/>

    <div className='flex flex-row w-full h-full place'>
        <div className='canvas'>
            <Canvas >
              <Model/>
              
            </Canvas>      
        </div>
        <div className='flex w-full h-full place-content-end text-9xl'>
          <Canvas>
            <Texts/>
          </Canvas>
        </div>
       
      </div>
    </div>   
    </>
 
  )
}

export default App
