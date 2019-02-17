import React, { Component } from 'react'
import { ReactComponent as Cat } from './cat.svg'
import styles from './styles.module.css'
import tilt from 'vanilla-tilt'

class Header extends Component {
  constructor (props) {
    super (props)
    this.ref = React.createRef()
  }

  componentDidMount () {
    tilt.init(this.ref.current, {
      reverse: true,
      perspective: 100
    })
  }

  render () {
    return (
      <div className={ styles.root }>
        <div className={ styles.cat } ref={ this.ref }>
          <Cat />
        </div>
        <div className={ styles.container }>
          <h1 className={ styles.heading }>
            Rhittm
          </h1>
          <small className={ styles.day }>
            { this.props.day }
          </small>
        </div>
      </div>
    )
  }
}

export default Header
