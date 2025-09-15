import React from 'react'
import { asset } from '../asset'

export default function About() {
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
            <h3>Join us for General Meetings!</h3>
            <p>Thursdays 5–6pm<br/>Engineering Gateway 3161</p>
          </div>
          <div className="card">
            <div className="media">
              <img src={asset('image5.png')} alt="meeting photo" />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="grid cols-2">
          <div className="card">
            <div className="media">
              <img src={asset('image6.png')} alt="group photo" />
            </div>
          </div>
          <div className="card card-pad">
            <h3>Opportunities</h3>
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
    </>
  )
}
