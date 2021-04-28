import path from 'path';

async function turnBooksIntoPages({ graphql, actions }) {
    // Gets template for the page
    const bookTemplate = path.resolve('/src/templates/Book');
    // Query all the books
    const { data } = await graphql(`
    query {
        book: allSanityBook {
          nodes {
            title
            slug {
              current
            }
          }
        }
      }
    `)
    console.log(data)
}

export async function createPages(params) {
    await Promise.all([
        turnBooksIntoPages(params)
    ])
}