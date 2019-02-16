import React from 'react'
import { AreaChart, linearGradient, Area, ResponsiveContainer, ReferenceLine } from 'recharts'
import circle from './circle.js'
import styles from './styles.module.css'

const basicTimes = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const transformData = (data, day) => data[day].map((amount, index) => ({
  "uv": amount
}))

console.log(basicTimes)
circle(basicTimes, 4)
circle(basicTimes, -4)

export default props => (
  <div className={ styles.root }>
    <ResponsiveContainer width="100%" height={ 400 } >
      <AreaChart data={ transformData(props.data, 'monday') } margin={{
        top: 0,
        bottom: 0,
        left: -10,
        right: 0
      }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#feb692" stopOpacity={ 0.8 } />
            <stop offset="95%" stopColor="#fa7268" stopOpacity={ 0 } />
          </linearGradient>
        </defs>
        <Area type="basis" dataKey="uv" stroke="#feb692" fillOpacity={1} fill="url(#colorUv)" />
        <ReferenceLine x="12" isFront={ true } label="Noon" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
)
