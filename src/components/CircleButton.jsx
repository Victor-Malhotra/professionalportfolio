import {Html} from '@react-three/drei'
export default function CircleButton({positonDefine, scaleDefine, buttonName}) {
  return (
    <mesh position={positonDefine} scale={scaleDefine}>
          <Html position={[0,0,0,0]} center>
        <p>{buttonName}</p>
        </Html>
          <sphereGeometry />
          <meshBasicMaterial color="yellow"/>
        </mesh>
  )
}