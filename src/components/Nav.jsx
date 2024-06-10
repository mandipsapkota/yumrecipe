import React from 'react'
import {GiKnifeFork} from "react-icons/gi"
import { Link } from 'react-router-dom'
Link
const Nav = () => {
  return (
    <nav className='p-4'>
      <Link to="/" className='flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all'>
          <GiKnifeFork className='w-8 h-10'/>
          <h1 className='font-bold text-xl'>Yumrecipe..</h1>
      </Link>
    </nav>
  )
}

export default Nav