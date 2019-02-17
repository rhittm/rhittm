import React, { Component } from 'react'
import Select from 'react-select'
import styles from './styles.module.css'
import bulkHashtags from '../hashtags.json'
import { transformText } from '../debt.js'

import Preset from '../Preset'

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
  }

  updateTags (newValue) {
    const categories = newValue.map(value => value.value)
    this.setState({
      tags: getTagsByCategories(categories)
    })
  }

  render () {
    return (
      <div className={ styles.root }>
        <h2 className={ styles.heading}>Hashtags</h2>
        <Select
          options={ getOptions() }
          isMulti
          onChange={ this.updateTags }
          placeholder="Hashtags..."
        />
        <Preset>
          { this.state.tags.map(tag => '#' + tag + ' ') }
        </Preset>
      </div>
    )
  }
}

export default Tags
