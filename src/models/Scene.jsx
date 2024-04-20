/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: SunnyMoon (https://sketchfab.com/EmmyK)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/alien-rose-5a6cc720bcaf41a79a59d4bd67999e07
Title: Alien Rose
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
useGLTF.preload("./models/alien_rose/scene.gltf");
export default function Model(props) {
  const { nodes, materials } = useGLTF("./models/alien_rose/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.755}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube002_Rose_Extra_0.geometry} material={materials.Rose_Extra} />
            <mesh geometry={nodes.Cube002_Rose_Petals_0.geometry} material={materials.Rose_Petals} />
            <mesh geometry={nodes.Cube002_Rose_Stem_0.geometry} material={materials.Rose_Stem} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("./models/alien_rose/scene.gltf");
