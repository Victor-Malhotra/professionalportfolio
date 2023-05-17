import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import  Hamburger  from 'hamburger-react'
import Link from 'next/link'

const Navbar=() => {
  const [isOpen,setIsOpen]=useState(false)
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <div onMouseOver={()=>{console.log(hi)}} className='float-right z-50 mr-2 mt-2 bg-[#4aecece2] p-2 text-3xl rounded-lg hover:bg-[#5ae]' onClick={() => {setIsOpen(!isOpen); console.log(isOpen)}}>{isOpen?(<AiOutlineClose onClick={()=>{setIsOpen(!isOpen)}}/>):(<AiOutlineMenu onClick={()=>{setIsOpen(!isOpen)}}/>)}
      {console.log(isOpen)}
      </div>
      {isOpen?(<div className='float-right z-50 mr-2 mt-2 bg-[#4aecece2] p-2 text-3xl rounded-lg'>{isOpen?(<UnderNAV />):(<div></div>)}</div>):(<div></div>)}
       
    </div>
  )
}

const UnderNAV=() => {
  return (
    <div>
      <ul>
        <li><Link href="./aboutme">About Me</Link></li>
        <li><Link href="./myskills">My Skills</Link></li>
        <li><Link href="./mywork">My Work</Link></li>
        <li><Link href="./myresume">Resume</Link></li>
        <li><Link href="./contactme">Contact</Link></li>
        <li><Link href="./blog">Blog</Link></li>
      </ul>
    </div>
  )
}

export default Navbar