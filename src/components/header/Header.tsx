import React from 'react'
import { Link } from 'react-router-dom'

import './_header.scss'

const Header = () => {
  return (
    <header className='header'>
        <div className="logo">
            <Link to="/" className="logo__link">QUIZ GAME</Link>
        </div>

        <span>
            <Link to='/registration' className="header__reg">Registration</Link>
            <Link to="/admin" className='header__admin'>Admin</Link>
        </span>    
    </header>
  )
}

export default Header