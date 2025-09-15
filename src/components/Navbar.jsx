import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <img src="/src/assets/image1.svg" alt="logo" />
          <span>ZIMS</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/about" className={({isActive})=>`nav-link ${isActive?'active':''}`}>About</NavLink>
          <NavLink to="/makerspace" className={({isActive})=>`nav-link ${isActive?'active':''}`}>MAKERSPACE</NavLink>
          <NavLink to="/projects" className={({isActive})=>`nav-link ${isActive?'active':''}`}>PROJECTS</NavLink>
        </div>
      </div>
    </nav>
  )
}
