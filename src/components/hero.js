import React from 'react'

import * as styles from './hero.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

export default ({ data }) => (
  <div className={styles.hero}>
    <GatsbyImage
      className={styles.heroImage}
      alt={data.name}
      image={data.heroImage.gatsbyImageData}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
