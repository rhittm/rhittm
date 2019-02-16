import React, { Component } from 'react'
import App from '../components/App'

class Root extends Component {
  constructor (props) {
    super (props)

    this.state = {
      date: new Date()
    }

    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 60 * 1000)
  }

  render () {
    return (
      <App date={ this.state.date }/>
    )
  }
}

export default Root
