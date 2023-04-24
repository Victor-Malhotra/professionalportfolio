import {Canvas} from '@react-three/fiber'
import {Html, OrbitControls, Stats} from '@react-three/drei'
import RoundedBoxButton from '@/components/RoundedBoxButton'

export default function Home() {
  return (
    <div>
      <Canvas style={{height: "100vh",width: "100vw"}}>
      
 <ambientLight intensity={0.1}/>
            <pointLight color="white" position={[5, 5, 5]}/>
        
        <RoundedBoxButton positionDefine={[0,0,0,0]} scaleDefine={[3,3,3]} buttonName="About Me" />
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  )
}
