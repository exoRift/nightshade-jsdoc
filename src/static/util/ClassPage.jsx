import React from 'react'

import Doclet from './Doclet.jsx'

import '../styles/ClassPage.css'

function ClassPage (props) {
  document.title = `${props.data.name} - ${props.doclet.name}`

  return (
    <div id='page'>
      <div className='header'>
        <span className='head name'>{props.doclet.name}</span>
        <span className='head desc'>{props.doclet.classdesc || props.doclet.description}</span>
      </div>

      <Doclet doclet={props.doclet} data={props.data}/>
    </div>
  )
}

export default ClassPage
