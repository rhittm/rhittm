import React, { Component } from 'react'
import Select from 'react-select'
import Preset from '../Preset'
import styles from './styles.module.css'
import bulkHashtags from '../hashtags.json'
import { transformText, getTagsByCategories, getOptions } from '../debt.js'

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
      tags: getTagsByCategories(bulkHashtags, categories)
    })
  }

  render () {
    return (
      <div className={ styles.root }>
        <h2 className={ styles.heading}>Hashtags</h2>
        <Select
          options={ getOptions(bulkHashtags) }
          isMulti
          onChange={ this.updateTags }
          placeholder="Hashtags..."
        />
        <Preset
          data-empty="Your hashtags will appear here. Tap to copy them."
        >
          { this.state.tags.map(tag => '#' + tag + ' ') }
        </Preset>
      </div>
    )
  }
}

export default Tags
