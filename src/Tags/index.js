import React, { Component } from 'react'
import Select from 'react-select'
import styles from './styles.module.css'
import bulkHashtags from '../hashtags.json'
import { transformText } from '../debt.js'

import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'

const getOptions = () => {
  const result = []

  Object.keys(bulkHashtags).forEach(category => {
    result.push({
      label: transformText(category),
      options: Object.keys(bulkHashtags[category]).map(subcategory => ({
        value: subcategory,
        label: transformText(subcategory)
      }))
    })
  })

  return result
}

const getFlatHashtags = () => {
  const result = {}

  Object.keys(bulkHashtags).forEach(category => {
    Object.assign(result, bulkHashtags[category])
  })

  return result
}

const flatHashtags = getFlatHashtags()

const getTagsByCategories = categories => {
  const tags = categories.map(category => flatHashtags[category]).flat()
  return tags.sort(() => Math.random() - Math.random()).slice(0, 30)
}

class Tags extends Component {
  constructor (props) {
    super (props)

    this.state = {
      tags: []
    }

    this.updateTags = this.updateTags.bind(this)
    this.copy = this.copy.bind(this)
  }

  updateTags (newValue) {
    const categories = newValue.map(value => value.value)
    this.setState({
      tags: getTagsByCategories(categories)
    })
  }

  copy (e) {
    const tags = e.target.innerHTML
    if (tags.length > 0) {
      const ghost = document.createElement('textarea')
      ghost.value = tags
      document.body.appendChild(ghost)
      ghost.select()
      document.execCommand('copy')
      document.body.removeChild(ghost)
    }
  }

  render () {
    return (
      <div className={ styles.root }>
        <h2 className={ styles.heading}>Hashtags</h2>

        <Select
          onTouchStart={ e => {
            e.preventDefault()
            e.target.click()
          } }
          options={ getOptions() }
          isMulti
          onChange={ this.updateTags }
          placeholder="Hashtags..."
        />
        <Tooltip
          title="Copied!"
          trigger="click"
          disabled={ this.state.tags.length === 0 }
        >
          <button
            className={ styles.tags }
            onClick={ this.copy }
          >
            { this.state.tags.map(tag => '#' + tag + ' ') }
          </button>
        </Tooltip>
      </div>
    )
  }
}

export default Tags
