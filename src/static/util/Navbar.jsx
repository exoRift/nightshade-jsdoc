import React from 'react'
import Navbtn from './Navbtn.jsx'

import banner from '../../assets/banner.png'

import routes from './routes.js'

function buildNav (kind) {
  return (a, d) => {
    if (kind === 'any' || d.kind === kind) {
      a.push(
        <div className={'nav-container ' + d.name} key={d.___id}>
          <Navbtn path={d.nav} name={d.name}/>

          {d.kind === 'class' && d.methods.length
            ? (
              <div className={'method-container'}>
                {d.methods.map((m) => (
                  <Navbtn path={d.nav} hash={m.name} name={m.name} key={m.___id}/>
                ))}
              </div>
            )
            : null}
        </div>
      )
    }

    return a
  }
}

function Navbar (props) {
  return (
    <div id='navbar'>
      <a href={props.data.repository} className='banner-container'>
        <img alt='banner' src={banner}/>
      </a>
      <div className='nav-btn-container'>
        <div className='section info'>
          {routes.map((r, i) => (
            <div className={'nav-container ' + r.name} key={i}>
              <Navbtn path={r.path} name={r.name} key={i}/>
            </div>
          ))}
        </div>

        <div className='section mainline'>
          <span className='head header'>Mainline</span>

          <div className='divider classes'>
            <span className='head subheader type'>Classes</span>
            {props.data.doclets.mainline.reduce(buildNav('class'), [])}
          </div>

          <div className='divider functions'>
            <span className='head subheader type'>Functions</span>
            {props.data.doclets.mainline.reduce(buildNav('function'), [])}
          </div>
        </div>

        {props.data.doclets.global.length ? (
          <div className='section global'>
            <span className='head header'>Global</span>

            {props.data.doclets.global.reduce(buildNav('any'), [])}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Navbar
