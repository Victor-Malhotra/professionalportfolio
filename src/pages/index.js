import {Canvas} from '@react-three/fiber'
import {Html, OrbitControls, Stats} from '@react-three/drei'
import RoundedBoxButton from '@/components/RoundedBoxButton'

export default function Home() {
  return (
    <div>
      <Canvas style={{height: "100vh",width: "100vw"}}>
      
 <ambientLight intensity={0.5}/>
        <pointLight color="white" intensity={0.8} position={[5,5,5]} />
        <Html position={[-3.3,2.6,0]}><div className='text-center w-[37rem] h-[24.5rem] z-50 m-auto pt-6 mr-2 mt-2 bg-[#4aecece2] p-2 text-3xl rounded-lg'></div></Html>
        <RoundedBoxButton positionDefine={[-5.36,3.8,0]} scaleDefine={[1,1,1]} buttonName="About Me" linkName="./aboutme"/>
        <RoundedBoxButton positionDefine={[-5.15,2.6,0]} scaleDefine={[1,1,1]} buttonName="My Skills" linkName="./myskills" />
        <RoundedBoxButton positionDefine={[-3.4,3.8,0]} scaleDefine={[1,1,1]} buttonName="My Work" linkName="./mywork" />
        <RoundedBoxButton positionDefine={[3.1,-1.7,0]} scaleDefine={[1,1,1]} buttonName="Resume" linkName="./myresume" />
        <RoundedBoxButton positionDefine={[3.1,-.48,0]} scaleDefine={[1,2,1]} buttonName="Contact Me"  linkName="./contactme"/>
        <RoundedBoxButton positionDefine={[1.2,-1.7,0]} scaleDefine={[1,1,1]} buttonName="Blog" linkName="./blog" />
      </Canvas>
    </div>
  )
}
