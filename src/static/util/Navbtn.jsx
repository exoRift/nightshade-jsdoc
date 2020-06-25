import React from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'

function Navbtn (props) {
  const location = useLocation()

  const hash = props.hash ? '#' + props.hash : ''

  return (
    <Link to={{
      pathname: props.path,
      hash
    }} className={'head nav-btn ' + props.name} active={location.pathname === props.path && location.hash === hash ? 'true' : 'false'}>
      <span>{props.name}</span>
    </Link>
  )
}

export default Navbtn
