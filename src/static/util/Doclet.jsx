import React from 'react'

import {
  Link
} from 'react-router-dom'

import '../styles/Doclet.css'

import {
  generateParams,
  formatParamData
} from './utils.jsx'

function Doclet (props) {
  const isClass = props.doclet.kind === 'class'

  return (
    <div className={'doclet ' + props.doclet.kind}>
      <div className='constructor'>
        {isClass ? <span className='new'>new</span> : null}
        <span className='name'>{props.doclet.name}</span>
        {isClass ? generateParams(props.doclet.meta.code.paramnames) : null}
        {props.doclet.augments ? <Link to={props.data.doclets.mainline.find((d) => d.name === props.doclet.augments[0]) ? '/mainline/class/' + props.doclet.augments[0] : null} className='name extends'>{props.doclet.augments[0]}</Link> : null}
      </div>

      <span className='desc'>{props.doclet.description}</span>

      {isClass
        ? formatParamData(props.doclet.params || [], props.doclet.properties || []).map((param) => (
          <div className='param-container'>

          </div>
        ))
        : null}
    </div>
  )
}

export default Doclet
