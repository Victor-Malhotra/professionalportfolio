import {Html,RoundedBox} from '@react-three/drei'
import Link from 'next/link'
import {RoundedBoxGeometery} from 'three-rounded-box'
export default function RoundedBoxButton({positionDefine, scaleDefine, buttonName, linkName}) {
  return (
    <Html style={{width: "100%"}} scale={scaleDefine} position={positionDefine}>
      <Link href={linkName}>
        <div className=' text-center w-40 h-24 z-50 m-auto pt-6 mr-2 mt-2 bg-[#4aecece2] p-2 text-3xl rounded-lg'><h1>{buttonName}</h1></div>
        </Link>
      </Html>
  )
}