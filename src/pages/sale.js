import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function BooksPage({ data }) {
    const books = data.allSanityBook.nodes
    console.log(books)

    return (
        <div>
            <div>
                <p>{books.map(book => book.title)}</p>
            </div>
        </div>

    )
}

export const query = graphql`
query {
    allSanityBook {
    totalCount
    nodes {
      title
      id
      price
      slug {
          current
      }
    }
  }
}

`