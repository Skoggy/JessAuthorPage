import React from 'react';
import { graphql } from 'gatsby';
// import Article from '../components/Article';
import { GatsbyImage } from 'gatsby-plugin-image'
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

export default function indexPage({ data }) {
  const articles = data.allSanityArticle.nodes
  articles.forEach(article => console.log(article.image))


  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h1>{article.headline}</h1>
          <GatsbyImage image={article.image} alt={article.headline} />
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
          id
        }
      }
        }
      }
    }
  


`