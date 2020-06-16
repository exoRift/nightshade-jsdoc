import React from 'react'
import Markdown from 'react-markdown'

import readme from './util/README.md'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      readme: ''
    }
  }

  render () {
    return (
      <>
        <h1>test</h1>
      </>
    )
  }

  componentDidMount () {
    fetch(readme)
      .then((res) => res.text())
      .then((content) => this.setState({
        readme: content
      }))
  }
}

export default Home
