import React, { Component } from 'react'
import Preset from '../Preset'
import { Picker } from 'emoji-mart'
import { Tooltip } from 'react-tippy'
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
        <h2 className={ styles.heading }>New Preset</h2>
        <div className={ styles.container }>
          <div className={ styles.sidebar }>
            <Picker
              title="Pick an emoji..."
              showPreview={ false }
              showSkinTones={ false }
              native
              style={{
                width: '100%',
                borderColor: '#ccc'
              }}
            />
          </div>
          <div className={ styles.main }>
            <Preset
              title="🤷"
              color="#feb692"
              inline
            >
              #hello
            </Preset>
            <textarea className={ styles.content }>
              #hello
            </textarea>
            <Tooltip
              title="Saved!"
              trigger="click"
              disabled={ false }
            >
              <button
                type="button"
                className={ styles.button }
                >
                  Save
                </button>
            </Tooltip>
          </div>
        </div>
      </div>
    )
  }
}

export default Presets
