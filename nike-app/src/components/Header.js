import React from 'react'
import LeftSite from './LeftSite.js';
import RightSite from './RightSite.js';
import Shoes from './Shoes.js';

function Header() {
  return (
    <header className='w-full flex'>
      <LeftSite />
      <RightSite />
      <Shoes />
    </header>
  )
}

export default Header