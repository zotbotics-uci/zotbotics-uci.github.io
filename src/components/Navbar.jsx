import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { asset } from '../asset'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/zims/" className="brand">
          <img src={asset('image1.png')} alt="logo" />
          <span>ZIMS</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/zims/about" className={({isActive})=>`nav-link ${isActive?'active':''}`}>About</NavLink>
          <NavLink to="/zims/makerspace" className={({isActive})=>`nav-link ${isActive?'active':''}`}>MAKERSPACE</NavLink>
          <NavLink to="/zims/projects" className={({isActive})=>`nav-link ${isActive?'active':''}`}>PROJECTS</NavLink>
        </div>
      </div>
    </nav>
  )
}