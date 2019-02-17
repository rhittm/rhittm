import React from 'react'
import styles from './styles.module.css'
import { ReactComponent as Cat } from './cat.svg'

export default props => (
  <div className={ styles.root }>
    <p className={ styles.text }>
      <b>Rhittm</b> suggests you when it's the best time to post on Instagram.
    </p>
    <p className={ styles.text }>
      We also suggest the hottest, most popular hashtags so you can boost your views instantly.
    </p>
    <div className={ styles.container }>
      <div className={ styles.logo }>
        <Cat className={ styles.cat }/>
        <h2 className={ styles.heading }>Rhittm</h2>
        <small className={ styles.by }>by</small>
        <a className={ styles.author } href="https://miloslav.website" target="_blank" rel="noopener noreferrer">uyouthe</a>
      </div>
      <ul className={ styles.links }>
        <li className={ styles.link }>
          <a href="https://github.com/rhittm" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li className={ styles.link }>
          <a href="https://www.patreon.com/uyouthe" target="_blank" rel="noopener noreferrer">Patreon</a>
        </li>
        <li className={ styles.link }>
          <a href="https://rhittm.github.io" target="_blank" rel="noopener noreferrer">About</a>
        </li>
      </ul>
    </div>
  </div>
)
