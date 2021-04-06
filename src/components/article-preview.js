import React from 'react'
import { Link } from 'gatsby'

import * as styles from './article-preview.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

export default ({ article }) => (
  <div className={styles.preview}>
    <GatsbyImage alt="" image={article.heroImage.gatsbyImageData} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
