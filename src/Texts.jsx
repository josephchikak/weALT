
import React, { useRef } from "react";
import { useGLTF, OrbitControls, PivotControls, Float , Text, MeshReflectorMaterial, Html} from "@react-three/drei";
import { useFrame, useThree, } from "@react-three/fiber";


const Texts = () => {

const textRef = useRef()
const join = useRef()

useFrame((state,delta) =>{
    const angle = state.clock.elapsedTime

    const { camera, mouse } = state

    camera.position.x = mouse.x * 0.3
    camera.position.y = mouse.y * 0.3



    // join.current.position.x = Math.sin (angle)


//    state.camera.position, [-state.viewport.width / 4 ], 0.25, delta
    // textRef.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta
    // state.camera.position.x = Math.sin(angle) * 0.2
    // state.camera.position.y = Math.cos(angle)  *0.2
    // state.camera.lookAt(0,0,0)
    
    // textRef.current.rotation.y += delta
    // sphereRef.current.rotation.y += delta
    // group.current.rotation.y += delta/2
    
    
    })

    // window.addEventListener('mousemove', (event) =>{
    //     cursor.x = (event.clientX/sizes.width) - 0.5
    //     cursor.y = (event.clientY/sizes.height) - 0.5
    
    // })
    


  return (<>

      
            <Text 
                ref={textRef}
                font='./poppins-v20-latin-200regular.woff'
                color={'linear-gradient(30deg, #c850c0, #ffcc70)'}
                fontSize={0.5}
                position={[-7,-0.2,-4]}
                maxWidth={6} 
                
                // textAlign='center'
            > 
              AND 
            <meshStandardMaterial  />
            </Text>

            <Text 
                ref={textRef}
                font='./poppins-v20-latin-200regular.woff'
                color={'linear-gradient(30deg, #c850c0, #ffcc70)'}
                fontSize={0.4}
                position={[-3,0.5,1]}
                maxWidth={6} 
                
                // textAlign='center'
            > 
              INNOVATION
            <meshStandardMaterial  />
            </Text>

            <Text 
                ref={textRef}
                font='./poppins-v20-latin-200regular.woff'
                color={'linear-gradient(30deg, #c850c0, #ffcc70)'}
                fontSize={0.8}
                position={[-2,0,1]}
                maxWidth={6} 
                
                // textAlign='center'
            > 
             ART 
            <meshStandardMaterial  />
            </Text>

            <Text 
                ref={textRef}
                font='./poppins-v20-latin-200regular.woff'
                color={'linear-gradient(30deg, #c850c0, #ffcc70)'}
                fontSize={0.3}
                position={[-3,2,1]}
                maxWidth={6} 
                
                // textAlign='center'
            > 
            CHANGING 
            <meshStandardMaterial />
            </Text>

            <Text 
                ref={textRef}
                font='./poppins-v20-latin-200regular.woff'
                color={'linear-gradient(30deg, #c850c0, #ffcc70)'}
                fontSize={1}
                position={[-2,1,2]}
                maxWidth={6} 
                
                // textAlign='center'
            > 
           LIVES 
            <meshStandardMaterial />
            </Text>

            <Text 
                ref={textRef}
                font='./poppins-v20-latin-200regular.woff'
                color='black'
                fontSize={0.4}
                position={[-3,1.5,-3]}
                maxWidth={6} 
                
                // textAlign='center'
            > 
             THROUGH 
            <meshStandardMaterial />
            </Text>

            {/* <Text
            position={[7,3,-3.]}
             ref={join}
             fontSize={0.4}
             maxWidth={5}
             color='black'>
                 Vision
            </Text> */}

            <Text
            position={[7,2,-3]}
            font='./poppins-v20-latin-200italic.woff'
             ref={join}
             fontSize={0.2}
             maxWidth={5}
             color='black'>
                  We are driven by a powerful vision of the future. We are a powerful, forward-thinking, and modern agency that leads the way in tech, art, and sports. We are based in the city of Jos, and we are proud to be a part of the vibrant and dynamic community here.   
            </Text>

            {/* <Text
            position={[6,0,-3]}
             ref={join}
             fontSize={0.4}
             maxWidth={5}
             color='black'>
                 Mission
            </Text> */}

            <Text
            position={[6,-1,-3]}
            font='./poppins-v20-latin-200italic.woff'
             ref={join}
             fontSize={0.2}
             maxWidth={5}
             color='black'>
                Our mission is to produce the next generation of modern innovators, artists, and athletes. We want to help young people unlock their full potential by providing them with the tools, resources, and support they need to succeed. Whether it's through our tech programs, art workshops, or sports clinics, we are committed to helping young people reach their goals and achieve their dreams.
            </Text>

            {/* <meshStandardMaterial color="greenyellow" /> */}
        
       
           
  
  </>
  
  )
}

export default Texts