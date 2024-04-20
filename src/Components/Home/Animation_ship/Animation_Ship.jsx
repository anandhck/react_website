import React, {Suspense} from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { Parallax } from "react-parallax";
// import {getProject, val} from "@theatre/core"

import Model from "../../../models/RoboIron";
// import {
//   editable as e,
//   // SheetProvider,
//   PerspectiveCamera,
//   useCurrentSheet,
// } from "@theatre/r3f";


const AnimationShip = () => {
  // const sheet = getProject('Product Animation').sheet('Scene');
  return (
    <>
      {/* <h1>Service</h1> */}
      <div className="canvas">
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          camera={{ position: [100, 100, 200], fov: 75 }}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <ScrollControls pages={6}>
            {/* <SheetProvider sheet={sheet}> */}
            {/* <Scene /> */}
            {/* </SheetProvider> */}
            <meshStandardMaterial attach="material" color={0x0ff000} />
            {/* <PerspectiveCamera
              theatreKey="Camera"
              makeDefault
              position={[0, 0, 0]}
              fov={90}
              near={0.1}
              far={70}
            /> */}
            <ambientLight intensity={1} />
            <directionalLight intensity={2} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

export default AnimationShip;

// const Scene = () => {
//   const sheet = useCurrentSheet();
//   const scroll = useScroll();
//   useFrame(() => {
//     const sequenceLength = val(sheet.sequence.pointer.length);
//     sheet.sequence.position = scroll.offset * sequenceLength;
//   })
//   return (
//     <>
//       <meshStandardMaterial attach="material" color={0x0ff000} />
//       <PerspectiveCamera theatreKey='Camera'
//         makeDefault
//         position={[0, 0, 0]}
//         fov={90}
//         near={0.1}
//         far={70}
//       />
//       <ambientLight intensity={1} />
//       <directionalLight intensity={2} />
//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>
//       <OrbitControls />
//     </>
//   );
// };