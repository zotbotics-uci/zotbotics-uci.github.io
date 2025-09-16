import React from 'react'
import { asset } from '../asset'

export default function Projects() {
  return (
    <>
      <section className="section hero">
        <div className="grid cols-2">
          <div>
            <h1 className="title" style={{ textAlign: 'left', marginBottom: '20px' }}>PROJECTS</h1>
            <p className="subtitle" style={{ textAlign: 'left', fontSize: '18px', marginBottom: '16px' }}>
              Introducing: 2025–2026 Projects
            </p>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--muted)', 
              fontStyle: 'italic',
              textAlign: 'left'
            }}>
              Use this image to complete your card
            </p>
          </div>
          <div className="card">
            <div className="media lg">
              <img src={asset('image7.png')} alt="projects hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ 
          marginTop: 0, 
          textAlign: 'center', 
          fontSize: '32px',
          color: 'var(--accent)',
          marginBottom: '32px'
        }}>
          Gallery
        </h2>
        <div className="grid gallery">
          <div className="card">
            <div className="media thumb">
              <img src={asset('image8.png')} alt="gallery 1" />
            </div>
          </div>
          <div className="card">
            <div className="media thumb">
              <img src={asset('image9.png')} alt="gallery 2" />
            </div>
          </div>
          <div className="card">
            <div className="media thumb">
              <img src={asset('image10.png')} alt="gallery 3" />
            </div>
          </div>
          <div className="card">
            <div className="media thumb">
              <img src={asset('image11.png')} alt="gallery 4" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}