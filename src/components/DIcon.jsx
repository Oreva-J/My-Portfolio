// import React, { Suspense, useRef, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";
// import CanvasLoader from "./Loader";

// // Icon component with dispose logic for geometry and texture
// const Icon = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// // DIcon component with resource cleanup
// const DIcon = ({ icon }) => {
//   const canvasRef = useRef(null);  // Reference to the canvas

//   // Dispose the renderer and context when the component is unmounted
//   useEffect(() => {
//     const currentCanvas = canvasRef.current;

//     return () => {
//       if (currentCanvas && currentCanvas.dispose) {
//         currentCanvas.dispose();
//       }
//     };
//   }, []);

//   return (
//     <Canvas
//       ref={canvasRef}  // Attach the canvasRef to the Canvas component
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Icon imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default DIcon;





// ---------------------------------------------------------------------------------
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React, { Suspense } from 'react'
// //import { FaAirbnb } from 'react-icons/fa'
// import figma from '../assets/tech/figma.png'
// import { HemisphereLight, IcosahedronGeometry } from 'three'
// import { socialIcons } from '../constants'


// const Icon = ({icon, link})=>{
//     const [decal] = useTexture([icon])
//     return(
//         <a href={link}>
//         <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//         <mesh castShadow receiveShadow  scale={3}>
//             <boxGeometry args={[1, 1]} color='red' />
//             <meshStandardMaterial
//             color='#ffffff'
//             polygonOffset
//             polygonOffsetFactor={-5}
//             flatShading
//             >
//                     {/* Apply the decal texture to the material */}
//                     <primitive attach="map" object={decal} />
//                 </meshStandardMaterial>
                    
//             <Decal
//             position={[0, 0, 1]}
//             rotation={[2 * Math.PI, 0, 6.25]}
//             scale={1.5}
//             map={decal}
//             flatShading
//             />
//         </mesh>
//         </Float>
//         </a>
//     )
// }

// const DIcon = () => {
//   return (
//     <div className='border border-white-100 w-16 h-24 m-0 p-0'>
//       <Canvas
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       >
//         <Suspense>
//             <ambientLight intensity={1} />  {/* Soft light */}
//             <hemisphereLight intensity={2} />
//             <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
//             {
//                 socialIcons.map((icon, index)=>(
//                     <Icon key={index} icon={icon.icon} link={icon.link} />
//                 ))
//             }
//         <Preload all />
//         <OrbitControls />
//         </Suspense>
//       </Canvas>
//     </div>
//   )
// }

// export default DIcon

