/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function ChessMat(props) {
    const { nodes, materials } = useGLTF('/chessmatnelkul.glb')
    
    const bakedTexture = useTexture("/chessbake.jpg");

	bakedTexture.flipY = false;

  return (
    <group {...props} dispose={null} position-x={3}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Siena_Table_Baked.geometry}
        material={nodes.Siena_Table_Baked.material}
        position={[1.047, 0.578, 1.244]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.229, 1.47, 1.229]}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUYLOPEZPAWNWHITE_Baked.geometry}
        material={nodes.RUYLOPEZPAWNWHITE_Baked.material}
        position={[1.129, 1.711, 1.195]}
        scale={1.093}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUYLOPEZPAWNBLACK_Baked.geometry}
        material={nodes.RUYLOPEZPAWNBLACK_Baked.material}
        position={[1.014, 1.711, 1.189]}
        scale={1.093}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Knight003_Baked.geometry}
        material={nodes.Knight003_Baked.material}
        position={[1.127, 1.724, 1.287]}
        scale={1.093}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Knight002_Baked.geometry}
        material={nodes.Knight002_Baked.material}
        position={[1.358, 1.724, 1.101]}
        scale={1.093}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.king001_Baked.geometry}
        material={nodes.king001_Baked.material}
        position={[1.247, 1.869, 1.072]}
        scale={1.093}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.king000_Baked.geometry}
        material={nodes.king000_Baked.material}
        position={[1.01, 1.869, 1.419]}
        scale={1.093}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.board_Baked.geometry}
        material={nodes.board_Baked.material}
        position={[1.072, 1.617, 1.246]}
        scale={1.093}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Light_Desk_Baked.geometry}
        material={nodes.Light_Desk_Baked.material}
        position={[0.488, 1.623, 1.26]}
        rotation={[-Math.PI / 2, 0, 0.976]}
        scale={100}
      ><meshBasicMaterial map={bakedTexture} /></mesh>
    </group>
  )
}

useGLTF.preload('/chessmatnelkul.glb')
