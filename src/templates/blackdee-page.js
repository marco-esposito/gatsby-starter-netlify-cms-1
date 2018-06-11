import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const renderList = (list) =>
  list.map(item => (
    <div className="service" key={item.image}>
      <img src={item.image} alt={item.alt} />
      <h2>{item.heading}</h2>
      <p>{item.intro}</p>
      <p>{item.description}</p>
    </div>
  ))

export const BlackdeePageTemplate = ({
  title,
  aboutUs,
  services,
  clients,
}) => (
  <Fragment>
    <section className="section" id="video">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${clients[0].image})`, backgroundAttachment: 'fixed' }}
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" id="about-us">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-7 is-offset-4">
            <div className="content">
              <div>
                <h1>{aboutUs.heading}</h1>
                <p>{aboutUs.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" id="services">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-7 is-offset-4">
            <div className="content">
              <div>
                <h1>{services.heading}</h1>
                <p>{services.description}</p>
              </div>
              <div>
                {renderList(services.items)}
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
            alt
          }
        }
        clients {
          image
          alt
        }
      }
    }
  }
`
