import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const BlackdeePageTemplate = ({
  title,
  aboutUs,
  services,
  clients,
}) => (
  <Fragment>
    <section className="section" id="video">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${clients[0].image})` }}
                >
                  <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                      boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                      backgroundColor: '#f40',
                      color: 'white',
                      padding: '1rem',
                    }}
                    >
                      {title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
    <section className="section" id="about-us">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
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
  const { frontmatter } = data.markdownRemark
  console.log('*****data****', data);
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
            description
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
