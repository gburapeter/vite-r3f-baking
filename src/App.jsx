import { Canvas } from '@react-three/fiber'
import './App.css'
import { Chess } from './Chess'
import { OrbitControls } from '@react-three/drei'
import { Chess2 } from './Chess2'
import { ChessMat } from './ChessMat'
import { Chess4 } from './Chess4'
import { KingMaterial } from './components/KingMaterial'
import { King } from './components/King'
import { TableFull } from './components/TableFull'
import { Tableagx } from './components/Tableagx'
import { FullSkit } from './components/FullSkit'
import { FullSkitV2 } from './components/FullSkitV2'
import { FullSkitV3 } from './components/FullSkitV3'
import { SkitV4 } from './components/FullSkitV4'
import { Lamp } from './components/Lamp'

function App() {

  return (
    <Canvas>
      {/* <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" /> */}
      {/* <Chess /> */}
      {/* <Chess2 />
      <OrbitControls />
       <ambientLight intensity={5} />
      <directionalLight position={[0, 0, 5]} color="red" />  */}
      {/* <ChessMat /> */}
      {/* <Chess4 /> */}
      {/* <King />
      <KingMaterial /> */}
      {/* <FullSkit /> */}
     <FullSkitV3 />
      <TableFull />
      <Tableagx />
      <Lamp />
      <OrbitControls />
      <ambientLight intensity={5} color={"blue"} />
      <directionalLight position={[0, 0, 5]} intensity={5}  color="red" />  
    </Canvas>
  )
}

export default App
