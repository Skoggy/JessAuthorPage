import React from 'react';
import { graphql, Link } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

export default function indexPage({ data }) {
  const articles = data.allSanityArticle.nodes
  console.log(articles)

  return (
    <div>
      <p>Hi There this is the main page</p>
    </div>
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