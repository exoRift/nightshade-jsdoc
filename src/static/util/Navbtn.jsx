import React from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'

function Navbtn (props) {
  const location = useLocation()

  return (
    <Link to={props.path} className={'nav-btn ' + props.name} active={location.pathname === props.path ? 'true' : 'false'}>
      <span>{props.name}</span>
    </Link>
  )
}

export default Navbtn
