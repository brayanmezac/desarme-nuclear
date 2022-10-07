import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>desarme nuclear</title>
        <meta name="description" content="desarme nuclear" />
        <meta property="og:title" content="desarme nuclear" />
        <meta property="og:description" content="desarme nuclear" />
      </Helmet>
      <div className={styles['container1']}>
        <h1 className={styles['text']}>Albert Einstein</h1>
        <span className={styles['text1']}>
          “No sé con qué armas se pelearía la Tercera Guerra Mundial, pero sé
          que la guerra posterior se peleará con piedras y palos”.
        </span>
      </div>
      <img
        alt="Logo of the Campaign for Nuclear Disarmament (CND), designed by Gerald Holtom in 1958"
        src="https://upload.wikimedia.org/wikipedia/commons/8/88/Peace_symbol_%28fixed_width%29.svg"
        loading="lazy"
        className={styles['image']}
      />
    </div>
  )
}

export default Home
