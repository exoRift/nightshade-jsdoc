import React from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'

import banner from '../../assets/banner.png'

import routes from './routes.js'

import data from './docdata.json'

function Navbar () {
  const location = useLocation()

  const sections = {
    main: routes.map((r, i) => (
      <Link key={i} to={r.path} className='nav-btn' active={location.pathname === r.path ? 'true' : 'false'}>
        <span>{r.name}</span>
      </Link>
    )),
    // classes: data.map((d, i) => (
    //   <Link key={i} to={r.path} className='nav-btn'>
    //     <span>{r.name}</span>
    //   </Link>
    // )),
    // global: data.map((d, i) => (
    //   <Link key={i} to={r.path} className='nav-btn'>
    //     <span>{r.name}</span>
    //   </Link>
    // ))
  }

  return (
    <div id='navbar'>
      <a href={data.repository} className='banner-container'>
        <img alt='banner' src={banner}/>
      </a>
      <div className='nav-btn-container'>
        <div className='section main'>
          {sections.main}
        </div>

        <h2>
          Classes
        </h2>
        <div className='section classes'>

        </div>

        <h2>
          Global
        </h2>
        <div className='section global'>

        </div>
        {/* check for global vars */}
      </div>
    </div>
  )
}

export default Navbar
