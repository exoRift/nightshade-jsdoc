import React from 'react'

function generateParams (params) {
  const paramList = params.reduce((a, p, i) => {
    if (a.length) a.push(<span className='comma' key={i}>,</span>)

    a.push(<span className='param' key={i}>{p}</span>)

    return a
  }, [])

  return (
    <div className='param-container'>
      {paramList}
    </div>
  )
}

export {
  generateParams
}
