import React from 'react'
import Logo from '../assets/Login/Netflix_Logo_PMS.png'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black'>
        <img src={Logo} alt='Netflix Logo' className='w-48 h-20'></img>
    </div>
  )
}

export default Header