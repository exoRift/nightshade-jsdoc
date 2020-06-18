import React from 'react'
import Navbtn from './Navbtn.jsx'

import banner from '../../assets/banner.png'

import routes from './routes.js'

function Navbar (props) {
  return (
    <div id='navbar'>
      <a href={props.data.repository} className='banner-container'>
        <img alt='banner' src={banner}/>
      </a>
      <div className='nav-btn-container'>
        <div className='section main'>
          {routes.map((r, i) => (
            <Navbtn path={r.path} name={r.name} key={i}/>
          ))}
        </div>

        <span className='header'>Classes</span>
        <div className='section classes'>
          {props.data.sections.class}
        </div>

        {props.data.sections.global.length ? (
          <>
            <span className='header'>Global</span>
            <div className='section global'>
              {props.data.sections.global}
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Navbar
