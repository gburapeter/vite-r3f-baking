/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function FullSkitV3(props) {
    const { nodes, materials } = useGLTF('/bakedgoodwithoutmat.glb')
    
      const bakedTexture = useTexture("/mergedadjacent.jpg");

	bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
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
    </group>
  )
}

useGLTF.preload('/bakedgoodwithoutmat.glb')


