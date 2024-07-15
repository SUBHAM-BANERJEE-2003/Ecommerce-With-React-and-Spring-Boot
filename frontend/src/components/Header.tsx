import React from 'react'
import '../css/Header.css'

const Header = () => {
  return (
    <div className='header-body'>
        <h1>Header</h1>
        <nav>
            <ul className='navlinks'>
                <li className='navlink'><a href="/">Home</a></li>
                <li className='navlink'><a href="/about">About</a></li>
                <li className='navlink'><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div className='button-container'>
          <button className='login-button'>Login</button>
          <button className='logout-button'>Logout</button>
        </div>
    </div>
  )
}

export default Header