import React from 'react'
import { asset } from '../asset'

export default function Projects() {
  return (
    <>
      <section className="section hero">
        <div className="grid cols-2">
          <div>
            <h1 className="title">PROJECTS</h1>
            <p className="subtitle">Introducing: 2025–2026 Projects</p>
            <p className="subtitle">
              <em>Join our Discord to get involved →</em>
            </p>
          </div>
          <div className="card">
            <img src={asset('image8.png')} alt="projects hero" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ marginTop: 0, textAlign: 'center' }}>Gallery</h2>
        <div className="grid cols-2" style={{ marginTop: 20 }}>
          <div className="card">
            <img src={asset('image9.png')} alt="gallery 1" />
          </div>
          <div className="card">
            <img src={asset('image10.png')} alt="gallery 2" />
          </div>
          <div className="card">
            <img src={asset('image11.png')} alt="gallery 3" />
          </div>
          <div className="card">
            <img src={asset('image12.png')} alt="gallery 4" />
          </div>
        </div>
      </section>
    </>
  )
}
