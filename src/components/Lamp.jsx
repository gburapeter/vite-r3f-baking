/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Lamp(props) {
    const { nodes, materials } = useGLTF('/deskbaked.glb')
    
     const bakedTexture = useTexture("/deskbaked.jpg");

	bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null} position-x={4.5}>
      <mesh
      
        geometry={nodes.board_Baked.geometry}
        material={nodes.board_Baked.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
      
        geometry={nodes.king000_Baked.geometry}
        material={nodes.king000_Baked.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
      
        geometry={nodes.king001_Baked.geometry}
        material={nodes.king001_Baked.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
      
        geometry={nodes.Knight003_Baked.geometry}
        material={nodes.Knight003_Baked.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
      
        geometry={nodes.RUYLOPEZPAWNWHITE_Baked.geometry}
        material={nodes.RUYLOPEZPAWNWHITE_Baked.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
      
        geometry={nodes.Siena_Table_Baked.geometry}
        material={nodes.Siena_Table_Baked.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
      
        geometry={nodes.Light_Desk_Baked.geometry}
        material={nodes.Light_Desk_Baked.material}
        position={[0.488, 1.623, 1.26]}
        rotation={[-Math.PI / 2, 0, 0.976]}
        scale={100}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
    </group>
  )
}

useGLTF.preload('/deskbaked.glb')

