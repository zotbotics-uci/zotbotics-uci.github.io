import React from 'react'
import { asset } from '../asset'

function Stat({ num, label }) {
  return (
    <div className="card card-pad" style={{ textAlign: 'center' }}>
      <div className="big-number">{num}</div>
      <div className="label">{label}</div>
    </div>
  )
}

export default function Makerspace() {
  return (
    <>
      <section className="section hero">
        <h1 className="title">THE MAKERSPACE</h1>
        <p className="subtitle">Located on outer ring road, our makerspace offers cutting-edge tools and equipment for all your creative projects.</p>
      </section>

      <section className="section">
        <div className="grid cols-3">
          <Stat num="4" label="K1 Printers" />
          <Stat num="12" label="Bambu A1 Printers" />
          <Stat num="1" label="Prusa Mk3 Printer" />
        </div>
      </section>

      <section className="section">
        <div className="grid cols-2">
          <div className="card">
            <div className="media lg">
              <img src={asset('image7.png')} alt="printer wall" />
            </div>
          </div>
          <div className="card card-pad">
            <h2>About the Makerspace</h2>
            <p>
              Located on outer ring road, the Interim Classroom Facility houses the
              campus' largest makerspace.
            </p>
            <p>
              From our large collection of 3D printers to our laser cutter and large
              selection of tools, our members can find anything to help complete
              projects. Plus, our MakerSpace Managers are always there to help!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}