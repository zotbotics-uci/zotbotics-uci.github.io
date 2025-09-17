import React from 'react'
import { useNavigate } from 'react-router-dom'
import { asset } from '../asset'

export default function Home() {
  const navigate = useNavigate()

  const scrollToAbout = (e) => {
    e.preventDefault()
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goTop = (to) => (e) => {
    requestAnimationFrame(() => window.scrollTo(0, 0))
    navigate(to)
  }

  return (
    <>
      <section className="section hero">
        <p className="eyebrow">Zotbotics' Introductory MakerSpace</p>
        <h1 className="title">ZIMS</h1>
        <p className="subtitle">Design, build, and learn with our open maker community at UCI.</p>
        <a href="#about" className="cta" onClick={scrollToAbout}>Learn More ↓</a>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="grid cols-2">
          <div className="card card-pad">
            <h2>ABOUT US</h2>
            <p>
              ZIMS is a club hosting UCI's open makerspace. Our goal is to provide
              a place for passions in engineering, robotics, and craftsmanship to thrive.
            </p>
            <p>
              <button className="cta" onClick={goTop('/about')}>
                More about our community →
              </button>
            </p>

            <div className="meeting-info">
              <strong>Join us for General Meetings!</strong>
              <div className="meeting-time">
                Thursdays 5–6pm<br/>
                Engineering Gateway 3161
              </div>
            </div>
          </div>

          {/* About image: cropped */}
          <div className="card">
            <div className="media cropped">
              <img src={asset('image2.png')} alt="about image" />
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN, BUILD, & MORE — image LEFT, text RIGHT with halo only behind text */}
      <section className="section">
        <div className="grid cols-2">
          {/* Image first (LEFT) */}
          <div className="card">
            <div className="media lg contain">
              <img src={asset('image3.png')} alt="makerspace gear" />
            </div>
          </div>

          {/* Text with halo glow */}
          <div className="halo-wrap halo-on">
            <h2
              className="title"
              style={{ fontSize: 48, marginBottom: 16, textAlign: 'left' }}
            >
              DESIGN, BUILD, &amp; MORE!
            </h2>
            <button className="cta" onClick={goTop('/makerspace')}>
              Explore our Makerspace →
            </button>
          </div>
        </div>
      </section>


      {/* PROJECTS — text LEFT, image RIGHT with gentle crop */}
      <section className="section">
        <div className="grid cols-2">
          {/* Text first so it sits LEFT on desktop */}
          <div className="card card-pad">
            <h2>PROJECTS</h2>
            <p>Build skills by building projects!</p>
            <p>
              <button className="cta" onClick={goTop('/projects')}>
                View Projects →
              </button>
            </p>
          </div>

          <div className="card">
            {/* Gentle crop without touching your CSS:
                - Limit container height
                - Cover + slight upward bias to keep key content visible */}
            <div className="media lg" style={{ maxHeight: 460 }}>
              <img
                src={asset('image11.png')}
                alt="project sample"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
