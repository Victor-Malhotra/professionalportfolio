import {Html, RoundedBox} from '@react-three/drei'
export default function RoundedBoxButton({positonDefine, scaleDefine, buttonName}) {
  return (
    <mesh position={positonDefine} scale={scaleDefine} radius={0.25} style={{borderRadius: "0.25rem"}}>
      <planeGeometry />
      <meshPhongMaterial attach="material" color="#44D0E4" />
          <Html style={{width:"100%"}}>
        {buttonName}
        </Html>
        </mesh>
  )
}