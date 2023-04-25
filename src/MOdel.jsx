import React, { useRef } from "react";
import { useGLTF, OrbitControls, PivotControls, Float , Text, MeshReflectorMaterial, Html} from "@react-three/drei";
import { useFrame, useThree, } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/weALT.glb");
  
  const {camera,gl} = useThree()
const group = useRef()
const logo = useRef()

  useFrame((state,delta) =>{
 logo.current.rotation.y += delta * 0.5

  })

  const sphereRef = useRef()
  const cubeRef = useRef()
   

  return (
    <group {...props} position-y={2} ref={group} dispose={null}>
    
        {/* <OrbitControls makeDefault/> */}

        {/* <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } /> */}
        <ambientLight intensity={ 0.5 } />


        {/* <mesh position={ [0,- 1, -1] } rotation-x={ Math.PI * 0.1} scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial
                 resolution = {512}
                 blur={[1000, 1000]}
                 mixBlur = {1}
                 mirror={0.8}
            
            />
             */}
            {/* <meshStandardMaterial color="greenyellow" /> */}
          
        {/* </mesh> */}
{/* 
        <Float
            floatIntensity={2}
     
        > */}
            {/* <Text
                font='./poppins-v20-latin-200italic.woff'
                color='salmon'
                fontSize={0.5}
                position-y={1}
                maxWidth={20} 
                textAlign='center'
            > 
            Changing Lives through Art and Innovation
            <meshNormalMaterial/>
            </Text> */}
        {/* </Float> */}
    
    
     <group ref={logo}>
     <mesh 
          geometry={nodes.Curve.geometry}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={30}
          // castShadow
      >
        <meshStandardMaterial color={'black'}/>
       
        {/* <Html
         position={[1, 1 ,0]}
         wrapperClass='label'
         center
         distanceFactor={15}
         >
         
        
       </Html> */}
      </mesh>
     

     </group>
     {/* <Text
        rotation-x={Math.PI * 2}>
        Changing Lives through Art and Innovation
        </Text> */}
     


    
   
    </group>
  );
}

useGLTF.preload("/weALT.glb");





