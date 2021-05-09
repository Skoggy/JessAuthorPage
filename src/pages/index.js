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
      {/* {articles.map(thing => <p>{thing.firstParagraph}</p>)} */}
      {/* <Article
        firstParagraph={articles[0].firstParagraph}
        headline={articles[0].headline} />
      <Article
        firstParagraph={articles[1].firstParagraph}
        headline={articles[1].headline} /> */}

      {articles.map(article => (
        <Article
          key={article._id}
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