import React, { Component } from 'react'
import { Tooltip } from 'react-tippy'
import styles from './styles.module.css'
import decide from 'decider'

class Preset extends Component {
  constructor (props) {
    super (props)
    this.ghost = React.createRef()
    this.button = React.createRef()
    this.copy = this.copy.bind(this)
  }

  copy (e) {
    const tags = e.target.innerHTML
    if (tags.length > 0) {
      const ghost = this.ghost.current
      ghost.value = tags
      ghost.select()
      document.execCommand('copy')
      this.button.current.focus()
    }
  }

  render () {
    return (
      <div className={ decide(styles, {
        root: true,
        inline: this.props.inline
      }) }>
        <Tooltip
          title="Copied!"
          trigger="click"
          disabled={ this.props.children.length === 0 }
        >
          <button
            className={ styles.pearl }
            onClick={ this.copy }
            ref={ this.button }
            data-empty={ this.props['data-empty'] || '+' }
          >
            { this.props.children }
          </button>
          <textarea
            className={ styles.ghost }
            ref={ this.ghost }
          ></textarea>
        </Tooltip>
      </div>
    )
  }
}

export default Preset
