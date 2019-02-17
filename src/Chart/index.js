import React, { Component } from 'react'
import { getGraphData, getSunriseAndSunset, getRoughSunriseAndSunset } from '../debt.js'
import styles from './styles.module.css'
import {
  AreaChart,
  linearGradient,
  Area,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts'

const chartMargin = {
  top: 0,
  bottom: 0,
  left: -10,
  right: 0
}

class Chart extends Component {
  constructor (props) {
    super (props)

    this.state = getRoughSunriseAndSunset(this.props.date)

    getSunriseAndSunset(this.props.date).then(times => {
      if (times) {
        this.setState(times)
      }
    })
  }

  render () {
    return (
      <ResponsiveContainer
        width="100%"
        height={ 300 }
      >
        <AreaChart
          data={ getGraphData(this.props.data, this.props.date) }
          margin={ chartMargin }
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#feb692" stopOpacity={ 0.8 } />
              <stop offset="95%" stopColor="#fa7268" stopOpacity={ 0 } />
            </linearGradient>
          </defs>
          <Area
            type="basis"
            dataKey="uv"
            stroke="#feb692"
            fill="url(#colorUv)"
          />
          <ReferenceLine
            className={ styles.sunrise }
            x={ this.state.sunrise }
            isFront={ true }
            label="🌞"
          />
          <ReferenceLine
            className={ styles.sunset }
            x={ this.state.sunset }
            isFront={ true }
            label="🌚"
          />
          <ReferenceLine
            x={ this.props.date.getHours() }
            isFront={ true }
            label="🐱"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

export default Chart
