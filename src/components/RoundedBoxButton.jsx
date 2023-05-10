import {Html,RoundedBox} from '@react-three/drei'
import {RoundedBoxGeometery} from 'three-rounded-box'
export default function RoundedBoxButton({positonDefine, scaleDefine, buttonName}) {
  return (
    <mesh position={positonDefine} scale={scaleDefine} radius={0.25} style={{borderRadius: "0.25rem"}}>
      <sphereGeometry/>
      <meshPhongMaterial attach="material" color="#44D0E4" />
      <Html style={{width: "100%"}} position={[0,0,0]}>
        {buttonName}
        </Html>
        </mesh>
  )
}