import React from 'react';
import { graphql, Link } from 'gatsby';
import Article from '../components/Article';
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

export default function indexPage({ data }) {
  const articles = data.allSanityArticle.nodes
  console.log(articles)


  return (
    <div>
      {articles.map(article => (
        <Article
          key={article.id}
          link={article.link}
          firstParagraph={article.firstParagraph}
          headline={article.headline} />)
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
    }
  }
}

`