import React from 'react'
import { ReactComponent as Cat } from './cat.svg'
import styles from './styles.module.css'

export default props => (
  <div className={ styles.root }>
    <Cat className={ styles.cat } />
    <div className={ styles.container }>
      <h1 className={ styles.heading }>
        Rhittm
      </h1>
      <small className={ styles.day }>
        { props.day }
      </small>
    </div>
  </div>
)
