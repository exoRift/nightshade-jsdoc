import React from 'react'

import '../styles/Doclet.css'

import {
  generateParams
} from './utils.jsx'

function Doclet (props) {
  const isClass = props.doclet.kind === 'class'

  return (
    <div className={'doclet ' + props.doclet.kind}>
      <div className='constructor'>
        {isClass ? <span className='new'>new</span> : null}
        <span className='name'>{props.doclet.name}</span>
        {isClass ? generateParams(props.doclet.meta.code.paramnames) : null}
      </div>

      <span className='desc'>{props.doclet.description}</span>

      {isClass || props.doclet.kind === ''}
    </div>
  )
}

export default Doclet
