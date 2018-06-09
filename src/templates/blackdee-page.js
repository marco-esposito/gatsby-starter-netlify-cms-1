import React from 'react'
import PropTypes from 'prop-types'

export const BlackdeePageTemplate = ({
  title,
  aboutUs,
  services,
  clients,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

BlackdeePageTemplate.propTypes = {
  title: PropTypes.string,
  aboutUs: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.text,
  }),
  services: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
  }),
  clients: PropTypes.array,
}

const BlackdeePage = ({ data }) => {
  console.log('***********', data);
  const { frontmatter } = data.markdownRemark

  return (
    <BlackdeePageTemplate
      title={frontmatter.title}
      aboutUs={frontmatter.about_us}
      services={frontmatter.services}
      clients={frontmatter.clients}
    />
  )
}

BlackdeePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BlackdeePage

export const blackdeePageQuery = graphql`
  query BlackdeePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
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
            name
            image
          }
        }
        clients {
          image
        }
      }
    }
  }
`
