import React, { useEffect } from 'react'
import { asset } from '../asset'

export default function About() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="section hero">
        <h1 className="title">ABOUT US</h1>
        <p className="subtitle" style={{ maxWidth: 800 }}>
          ZIMS is a club who invites students from the University of California, Irvine to collaborate
          on creative and technical work. Members are encouraged to expand their knowledge beyond the
          classroom and apply concepts to innovate and invent.
        </p>
      </section>

      <section className="section">
        <div className="grid cols-2">
          <div className="card card-pad">
            <h2 className="accent-title accent-title-lg">General Meeting Time</h2>
            <p>Thursdays 5–6pm<br/>Engineering Gateway 3161</p>
          </div>

          {/* Slightly tighter vertical crop */}
          <div className="card">
            <div className="media cropped">
              <img src={asset('image5.png')} alt="meeting photo" />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="grid cols-2">
          {/* Slightly tighter vertical crop */}
          <div className="card">
            <div className="media cropped">
              <img src={asset('image6.png')} alt="group photo" />
            </div>
          </div>

          <div className="card card-pad">
            <h2 className="accent-title accent-title-lg">Opportunities</h2>
            <ul>
              <li>Hands-On Projects</li>
              <li>MakerSpace Access</li>
              <li>Professional Development</li>
              <li>Networking</li>
              <li>Community</li>
            </ul>
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
          <div className="card"><div className="media thumb"><img src={asset('image8.png')} alt="gallery 1" /></div></div>
          <div className="card"><div className="media thumb"><img src={asset('image9.png')} alt="gallery 2" /></div></div>
          <div className="card"><div className="media thumb"><img src={asset('image10.png')} alt="gallery 3" /></div></div>
          <div className="card"><div className="media thumb"><img src={asset('image11.png')} alt="gallery 4" /></div></div>
        </div>
      </section>
    </>
  )
}
