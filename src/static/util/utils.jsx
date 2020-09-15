import React from 'react'

import ClassPage from './ClassPage.jsx'

function process (data) {
  const processed = {
    repository: data.repository,
    name: data.name,
    navs: [],
    doclets: {
      mainline: [],
      global: [],
      other: []
    }
  }

  for (const doclet of data.doclets) {
    const scope = doclet.scope === 'global' ? (['class', 'function'].includes(doclet.kind) ? 'mainline' : 'global') : doclet.scope
    const path = `/${scope}/${doclet.kind}/` + doclet.name

    doclet.nav = path

    switch (scope) {
      case 'global': {
        processed.doclets.global.push(doclet)

        break
      }

      case 'instance': {
        const parent = processed.doclets.mainline.find((d) => d.name === doclet.memberof)

        parent[doclet.kind === 'function' ? 'methods' : 'members'].push(doclet)

        break
      }

      case 'mainline':
        if (doclet.kind === 'class') {
          doclet.methods = []
          doclet.members = []
        }

        processed.doclets.mainline.push(doclet)

        break

      default:
        processed.doclets.other.push(doclet)

        break
    }

    if (scope === 'global' || scope === 'mainline') {
      processed.navs.push({
        path,
        exact: true,
        name: doclet.name,
        render: () => <ClassPage data={processed} doclet={doclet}/>
      })
    }
  }

  return processed
}

function generateParams (params) {
  const paramList = params.reduce((a, p, i) => {
    if (a.length) a.push(<span className='comma' key={i}>,</span>)

    a.push(<span className='param' key={i}>{p}</span>)

    return a
  }, [])

  return (
    <div className='con-param-container'>
      {paramList}
    </div>
  )
}

function formatParamData (params, properties) {
  return params.map((param) => {
    const props = properties.reduce((a, prop) => {
      const split = prop.name.split('.')

      if (split[0] === param.name) {
        a.push({
          ...prop,
          name: split.slice(0, split.length).join('.')
        })
      }

      return a
    }, [])

    return {
      ...param,
      props
    }
  })
}

export {
  process,
  generateParams,
  formatParamData
}
