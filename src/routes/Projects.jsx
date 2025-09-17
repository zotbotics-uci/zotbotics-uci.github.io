import React from 'react'

// build a URL to src/assets/<name> that Vite understands
const imgUrl = (name) => new URL(`../assets/${name}`, import.meta.url).href

const PROJECTS = [
  {
    num: '01',
    title: 'Manufacturing 101',
    subtitle: '1 Quarter · Team size 1 · Cost: TBD',
    blurb:
      'Entry-level, hands-on training: CAD, 3D printing, CNC, soldering, and Arduino. Capstone is designing and assembling a custom RC car.',
    img: 'l1.png',
  },
  {
    num: '02',
    title: 'Spider Droid',
    subtitle: '1 Quarter · Team size 2–3 · Cost: TBD',
    blurb:
      'Build an open-source robotic spider with autonomous obstacle avoidance and optional Bluetooth control. Reinforces 3D printing, electronics, and embedded programming.',
    img: 'l2.png',
  },
  {
    num: '03',
    title: 'Robot Arm',
    subtitle: '2 Quarters · Team size 5–6 · Cost: TBD',
    blurb:
      '3D print, assemble, wire, and program an Arduino-based arm. End with challenges like max-weight lift and cup stacking—optimize your design for performance.',
    img: 'l3.png', // replace when you have the real file
  },
  {
    num: '04',
    title: 'DIY Droid',
    subtitle: '3 Quarters · Team size 7–8 · Cost: TBD',
    blurb:
      'Open-ended build: R2-D2/BB-8-inspired or something unique (snack bot, laundry folder, soccer bot). Push technical, creative, and teamwork skills.',
    img: 'l4.png',
  },
  {
    num: '05',
    title: 'Self-Leveling Robot Anteater',
    subtitle: '3 Quarters · Team size 10 · Cost: TBD',
    blurb:
      'Advanced, application-based: anteater-shaped robot that can stand, walk, jump, and recover from falls. Requires controls, mechatronics, and biomechanics.',
    img: 'l5.png',
  },
]

export default function Projects() {
  return (
    <>
      {/* Hero matches Makerspace: centered title & paragraph */}
      <section className="section hero projects-hero">
        <h1 className="title">PROJECTS</h1>
        <p className="subtitle">
          Hello everyone, our board is excited to present the 2025–2026 ZOTBotics Projects! This year's lineup is
          designed to help students gain hands-on experience and foundational skills in robotics, fabrication,
          and teamwork. Whether you're just starting out or looking to challenge yourself with a complex,
          interdisciplinary build, there's a project for you. Let's learn and build together!
        </p>
      </section>

      <section className="section">
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.num} className="project-card">
              <header className="card-head">
                <div className="card-num">{p.num}</div>
                <h2 className="card-title">
                  {p.title} <span className="arrow">→</span>
                </h2>
                <div className="card-sub">{p.subtitle}</div>
              </header>

              <p className="card-blurb">{p.blurb}</p>

              <div className="card-media">
                <img
                  src={imgUrl(p.img)}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'data:image/svg+xml;utf8,' +
                      encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
                           <rect width="100%" height="100%" fill="#0b1a3a"/>
                           <text x="50%" y="50%" fill="#e8d68a" font-size="28" text-anchor="middle" dominant-baseline="middle">
                             Add image: ${p.img} in src/assets
                           </text>
                         </svg>`
                      )
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
