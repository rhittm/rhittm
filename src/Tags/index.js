import React from 'react'
import Select from 'react-select'
import styles from './styles.module.css'
import bulkHashtags from '../hashtags.json'
import { transformText } from '../debt.js'

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

export default props => (
  <div className={ styles.root }>
    <h2 className={ styles.heading}>Hashtags</h2>
    <Select
      onTouchStart={ e => e.target.click() }
      options={ getOptions() }
      isMulti
      placeholder="Hashtags..."
    />
  </div>
)
