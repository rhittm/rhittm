import React from 'react'
import styles from './styles.module.css'
import Chart from '../Chart'
import Header from '../Header'
import Tags from '../Tags'
import Footer from '../Footer'
import data from '../../popularity.json'
import { labelDay } from '../../helpers/days.js'

export default props => (
  <main className={ styles.root }>
    <Header day={ labelDay(props.date.getDay()) }/>
    <Chart data={ data } date={ props.date } />
    <Tags />
    <Footer />
  </main>
)
