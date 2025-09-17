import React from 'react'

// build a URL to src/assets/<name> that Vite understands
const imgUrl = (name) => new URL(`../assets/${name}`, import.meta.url).href

const PROJECTS = [
  {
    num: '01',
    title: 'Manufacturing 101',
    subtitle: '1 Quarter · Team size 1 · Cost: TBD',
    blurb:
      "This entry-level project is designed to equip you with essential skills for designing and building robots. You’ll attend two workshops per week covering topics such as CAD, 3D printing, CNC cutting, soldering, and Arduino. The quarter culminates in the design and assembly of a custom kinetic sculpture, combining everything you've learned.",
    img: 'l1.png',
  },
  {
    num: '02',
    title: 'Spider Droid',
    subtitle: '1 Quarter · Team size 2–3 · Cost: TBD',
    blurb:
      'In this project, you’ll build an open-source robotic spider that can avoid obstacles autonomously or be manually controlled via Bluetooth. This project reinforces skills in 3D printing, electronics assembly, and embedded programming.',
    img: 'l2.png',
  },
  {
    num: '03',
    title: 'Robot Arm',
    subtitle: '2 Quarters · Team size 5–6 · Cost: TBD',
    blurb:
      'Build and customize your own open-source robotic arm! You\'ll 3D print, assemble, wire, and program the arm using Arduino. Teams will compete at the end of the project in a series of challenges, including a max-weight lift and a cup-stacking contest. Success will depend on how well you optimize and modify your design for performance.',
    img: 'l3.png',
  },
  {
    num: '04',
    title: 'DIY Droid',
    subtitle: '3 Quarters · Team size 7–8 · Cost: TBD',
    blurb:
      'This open-ended project gives you the creative freedom to design and build a robot that performs a task of your choice. You’ll work with a larger team to bring your own idea to life, whether it\'s a Star Wars-inspired droid like R2-D2 or BB-8, or something unique like a robot that serves snacks, folds clothes, or plays soccer! This project challenges your technical, creative, and collaborative abilities.',
    img: 'l4.png',
  },
  {
    num: '05',
    title: 'Self-Leveling Robot Anteater',
    subtitle: '3 Quarters · Team size 10 · Cost: TBD',
    blurb:
      'Our most advanced project is focused on designing and building a self-leveling robot in the shape of UCI’s mascot, the anteater. This robot will be able to stand, walk, jump, and recover from falls. It requires advanced knowledge across multiple engineering domains, including controls, mechatronics, and biomechanics. Admission is application-based and best suited for experienced members ready for a challenge.',
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
          Divided on difficulty, the project lineup is
          designed to help students gain hands-on experience and foundational skills in robotics, fabrication, and
          teamwork. Whether you're just starting out or looking to challenge yourself with a complex, interdisciplinary
          build, there's a project for you. 
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
