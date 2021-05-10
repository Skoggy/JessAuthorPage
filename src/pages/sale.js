import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Book from '../components/Book';



export default function BooksPage({ data }) {
    const books = data.allSanityBook.nodes
    console.log(books)

    return (
        <div>
            <p>This is the page that will list all of the books</p>
            <div>
                {books.map(book => (
                    <Book
                        key={book.id}
                        title={book.title}
                        description={book.description}
                    // linkToBuy={book.}
                    ></Book>
                ))}
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