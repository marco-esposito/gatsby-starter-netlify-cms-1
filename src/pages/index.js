import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { allMarkdownRemark: { edges } } = data;
    const { node: { frontmatter } } = edges[0];
    // return (
    //   <BlackdeePageTemplate
    //     title={frontmatter.title}
    //     aboutUs={frontmatter.about_us}
    //     services={frontmatter.services}
    //     clients={frontmatter.clients}
    //   />
    // )
    console.log('***********', frontmatter);

    return (
      <div></div>
      // <section className="section">
      //   <div className="container">
      //     <div className="content">
      //       <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
      //     </div>
      //     {posts
      //       .map(({ node: post }) => (
      //         <div
      //           className="content"
      //           style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
      //           key={post.id}
      //         >
      //           <p>
      //             <Link className="has-text-primary" to={post.fields.slug}>
      //               {post.frontmatter.title}
      //             </Link>
      //             <span> &bull; </span>
      //             <small>{post.frontmatter.date}</small>
      //           </p>
      //           <p>
      //             {post.excerpt}
      //             <br />
      //             <br />
      //             <Link className="button is-small" to={post.fields.slug}>
      //               Keep Reading →
      //             </Link>
      //           </p>
      //         </div>
      //       ))}
      //   </div>
      // </section>
    )
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

export const pageQuery = graphql`
  query BlackdeePage {
    allMarkdownRemark(
      # sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blackdee-page" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            about_us {
              heading
              description
            }
            services {
              heading
              description
              items {
                heading
                intro
                description
                image
                alt
              }
            }
            clients {
              heading
              items {
                image
                alt
              }
            }
          }
        }
      }
    }
  }
`
