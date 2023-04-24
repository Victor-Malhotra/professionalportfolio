import {Html, RoundedBox} from '@react-three/drei'
export default function RoundedBoxButton({positonDefine, scaleDefine, buttonName}) {
  return (
    <RoundedBox position={positonDefine} scale={scaleDefine} radius={0.1}>
          <Html position={[0,0,0,0]} center style={{width:"100%"}}>
        <p>{buttonName}</p>
        </Html>
          <meshLambertMaterial attach="material" color={"#44D0E4"} />
        </RoundedBox>
  )
}