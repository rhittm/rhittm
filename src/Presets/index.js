import React, { Component } from 'react'
import Preset from '../Preset'
import styles from './styles.module.css'

class Presets extends Component {
  constructor (props) {
    super (props)

    this.state = {
      presets: ['hi', 'hello']
    }
  }

  render () {
    return (
      <div className={ styles.root }>
        <h2 className={ styles.heading }>Presets</h2>
        { this.state.presets.map((preset, index) => (
            <Preset
              key={ 'preset' + index }
              inline
            >
              { preset }
            </Preset>
        )) }
      </div>
    )
  }
}

export default Presets
