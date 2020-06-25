import React from 'react'

import ClassPage from './ClassPage.jsx'

function process (data) {
  const processed = {
    repository: data.repository,
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

export {
  process
}
