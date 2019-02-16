import React, { Component } from 'react'
import styles from './styles.module.css'
import Chart from '../Chart'
import Header from '../Header'
import Tags from '../Tags'
import Footer from '../Footer'
import data from '../popularity.json'
import { labelDay } from '../debt.js'

class Root extends Component {
  constructor (props) {
    super (props)

    this.state = {
      date: new Date()
    }

    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 60 * 1000)
  }

  render () {
    return (
      <main className={ styles.root }>
        <div className={ styles.container }>
          <Header day={ labelDay(this.state.date.getDay()) }/>
          <Chart data={ data } date={ this.state.date } />
          <Tags />
        </div>
        <Footer />
      </main>
    )
  }
}

export default Root
