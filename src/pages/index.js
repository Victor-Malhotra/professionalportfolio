import {Canvas} from '@react-three/fiber'
import {Html} from '@react-three/drei'
import CircleButton from '@/components/CircleButton'

export default function Home() {
  return (
    <div>
      <Canvas style={{height: "100vh", width:"100vw"}}>
 <ambientLight intensity={0.1}/>
            <directionalLight color="red" position={[-1,0,0,0]}/>
        
        <CircleButton positionDefine={[0,0,0,0]} scaleDefine={[3,3,3]} buttonName="About Me"/>
      </Canvas>
    </div>
  )
}
