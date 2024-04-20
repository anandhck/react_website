import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../models/Scene";
import "./Alien.css"
const Alien = () => {
    return (
      <div className="canvas">
        <Canvas
          camera={{ position: [10, 10, 20], fov: 2 }}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          
          <ambientLight intensity={10} />
          <directionalLight intensity={10} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    );
}

export default Alien;
