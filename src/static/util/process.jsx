import React from 'react'

import Navbtn from './Navbtn.jsx'

function process (data) {
  const processed = {
    repository: data.repository,
    sections: {
      class: [],
      global: []
    },
    pages: []
  }

  for (const doclet of data.doclets) {
    const kind = doclet.kind === 'typedef' || (doclet.meta && doclet.meta.code.name === 'globalFunction') ? 'global' : doclet.kind

    if (['class', 'global'].includes(kind)) {
      const path = `/${kind}/` + doclet.name

      processed.sections[kind].push(<Navbtn path={path} name={doclet.longname} key={doclet.___id}/>)

      const Page = null

      processed.pages.push({
        path,
        exact: true,
        name: doclet.name,
        Component: Page
      })
    }
  }

  return processed
}

export {
  process
}
