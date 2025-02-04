/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function FullSkitV2(props) {
   
    
      const { nodes, materials } = useGLTF('/mergedbake.glb')
     const bakedTexture = useTexture("/mergedbake.jpg");

	bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
      <mesh
       
        geometry={nodes.board.geometry}
        material={nodes.board.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
       
        geometry={nodes.king000.geometry}
        material={nodes.king000.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
       
        geometry={nodes.king001.geometry}
        material={nodes.king001.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
       
        geometry={nodes.Knight003.geometry}
        material={nodes.Knight003.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
       
        geometry={nodes.RUYLOPEZPAWNWHITE.geometry}
        material={nodes.RUYLOPEZPAWNWHITE.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      {/* <mesh
       
        geometry={nodes.Siena_Table.geometry}
        material={nodes.Siena_Table.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh> */}
    </group>
  )
}

useGLTF.preload('/mergedbake.glb')