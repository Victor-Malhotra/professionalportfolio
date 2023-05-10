import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import  Hamburger  from 'hamburger-react'
import Link from 'next/link'

const Navbar=() => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='float-right z-50 mr-2 mt-2 bg-[#4aecece2] p-2 text-3xl rounded-lg'><Hamburger duration={0.8} toggled={() => {isOpen}} toggle={() => {setOpen; console.log(isOpen)}} /><UnderNAV /></div>
    
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