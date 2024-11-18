/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function SkitV4(props) {
    const { nodes, materials } = useGLTF('/bakedgoodwithoutmat-v1.glb')
    
      const bakedTexture = useTexture("/mergedbake.jpg");

	bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.board.geometry}
        material={nodes.board.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Siena_Table.geometry}
        material={nodes.Siena_Table.material}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
    </group>
  )
}

useGLTF.preload('/bakedgoodwithoutmat-v1.glb')