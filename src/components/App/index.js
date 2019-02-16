import React from 'react'
import styles from './styles.module.css'
import Chart from '../Chart'
import Tags from '../Tags'
import Footer from '../Footer'
import { ReactComponent as Cat } from './cat.svg'

export default props => (
  <main className={ styles.root }>
    <Cat className={ styles.cat } />
    <Chart />
    <Tags />
    <Footer />
  </main>
)
