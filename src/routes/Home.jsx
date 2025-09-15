import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <>
      <section className="section hero">
        <p className="eyebrow">Zotbotics' Introductory MakerSpace</p>
        <h1 className="title">ZIMS</h1>
        <p className="subtitle">Design, build, and learn with our open maker community at UCI.</p>
        <Link to="/makerspace" className="cta">Learn More ↓</Link>
      </section>

      <section className="section">
        <div className="grid cols-2">
          <div className="card card-pad">
            <h2 style={{marginTop:0}}>ABOUT US</h2>
            <p>ZIMS is a club hosting UCI's open makerspace. Our goal is to provide a place for passions in engineering, robotics, and craftsmanship to thrive.</p>
            <p><Link to="/about" className="cta">More about our community →</Link></p>
            <p><strong>Join us for General Meetings!</strong><br/>Thursdays 5–6pm<br/>Engineering Gateway 3161</p>
          </div>
          <div className="card"><img src="/src/assets/image2.svg" alt="about image" /></div>
        </div>
      </section>

      <section className="section">
        <div className="grid cols-2">
          <div>
            <h2 className="title" style={{fontSize:48, marginBottom:16}}>DESIGN, BUILD, & MORE!</h2>
            <Link to="/makerspace" className="cta">Explore our Makerspace</Link>
          </div>
          <div className="card"><img src="/src/assets/image3.svg" alt="makerspace gear" /></div>
        </div>
      </section>

      <section className="section">
        <div className="grid cols-2">
          <div className="card"><img src="/src/assets/image4.svg" alt="project sample" /></div>
          <div className="card card-pad">
            <h2 style={{marginTop:0}}>PROJECTS</h2>
            <p>Build skills by building projects!</p>
            <p><Link to="/projects" className="cta">View Gallery →</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}
