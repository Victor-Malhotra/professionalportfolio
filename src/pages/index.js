import {Canvas} from '@react-three/fiber'
import {Html, OrbitControls, Stats} from '@react-three/drei'
import RoundedBoxButton from '@/components/RoundedBoxButton'

export default function Home() {
  return (
    <div>
      <Canvas style={{height: "100vh",width: "100vw"}}>
      
 <ambientLight intensity={0.5}/>
            <pointLight color="white" intensity={0.8} position={[5, 5, 5]}/>
        <RoundedBoxButton positionDefine={[10,10,0]} scaleDefine={[1,1,1]} buttonName="About Me" />
        <Stats />
      </Canvas>
    </div>
  )
}
