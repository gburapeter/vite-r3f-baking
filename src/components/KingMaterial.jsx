/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function KingMaterial(props) {
  const { nodes, materials } = useGLTF('/chesskingmaterial.glb')
  return (
      <group {...props} dispose={null} position-x={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.king001_Baked.geometry}
        material={materials.MergedBake_Baked}
        position={[1.376, 1.869, 1.072]}
        scale={1.093}
      />
    </group>
  )
}

useGLTF.preload('/chesskingmaterial.glb')



