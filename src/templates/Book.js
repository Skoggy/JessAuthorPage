import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

export default function BookPage({ data }) {
    const { book } = data;

    return (
        <div>
            <p>{book.title}</p>
        </div>
    )
}

export const query = graphql`
query($slug: String!) {
    project: sanityBook(slug: { current: { eq: $slug } }) {
      title
      id
      slug {
          current
      }
}
}

`