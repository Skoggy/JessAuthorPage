import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image'


// import Layout from "../components/layout"
// import SEO from "../components/seo"

export default function indexPage({ data }) {
  const articles = data.allSanityArticle.nodes
  const articleImages = articles.forEach(article => article.image.asset.gatsbyImageData)
  console.log(articles)

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h1>{article.headline}</h1>
          <GatsbyImage image={article.image.asset.gatsbyImageData} alt={article.headline} />
          <p>{article.firstParagraph}</p>
        </div>
      )
      )}
    </div >
  )
}


export const query = graphql`
query {
    allSanityArticle {
    totalCount
    nodes {
      link
      headline
      id
      firstParagraph
      slug {
          current
      }
      image {
          asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
        }
      }
    }
  


`