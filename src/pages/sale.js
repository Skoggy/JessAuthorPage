import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image'
import Book from '../components/Book';



export default function BooksPage({ data }) {
    const books = data.allSanityBook.nodes
    console.log(books)

    return (
        <div>
            <p>This is the page that will list all of the books</p>
            <div>
                {books.map(book => (
                    <div key={book.id}>
                        <Book

                            title={book.title}
                            description={book.description}
                        // linkToBuy={book.}
                        />
                        <GatsbyImage image={book.image.asset.gatsbyImageData} alt='' />
                    </div>
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
                image {
                    asset {
                    gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
    }
  }
}

                `