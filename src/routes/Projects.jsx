import React from 'react'

export default function Projects(){
  return (
    <>
      <section className="section hero">
        <h1 className="title">PROJECTS</h1>
        <p className="subtitle">Introducing: 2025–2026 Projects</p>
        <p className="subtitle"><em>Join our Discord to get involved →</em></p>
      </section>

      <section className="section">
        <h2 style={{marginTop:0, textAlign:'center'}}>Gallery</h2>
        <div className="grid cols-2" style={{marginTop:20}}>
          <div className="card"><img src="/src/assets/image8.svg" alt="gallery 1" /></div>
          <div className="card"><img src="/src/assets/image9.svg" alt="gallery 2" /></div>
          <div className="card"><img src="/src/assets/image10.svg" alt="gallery 3" /></div>
          <div className="card"><img src="/src/assets/image11.svg" alt="gallery 4" /></div>
        </div>
      </section>
    </>
  )
}
