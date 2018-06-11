import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

const renderList = (list, className) => (
  list.map((item, index) => (
    <div className={className} key={index}>
      {item.image ? (
        <img src={item.image} alt={item.alt} />
      )
      : null}
      {item.heading ? (
        <h2>{item.heading}</h2>
      )
      : null}
      {item.intro ? (
        <p className="item-intro">{item.intro}</p>
      )
      : null}
      {item.description ? (
        <p className="item-description">{item.description}</p>
      )
      : null}
    </div>
  ))
)

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
                style={{ backgroundImage: `url(${services.items[0].image})`, backgroundAttachment: 'fixed' }}
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
              <div className="section-intro">
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
              <div className="section-intro">
                <h1>{services.heading}</h1>
                <p>{services.description}</p>
              </div>
              {renderList(services.items, 'service')}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" id="clients">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-7 is-offset-4">
            <div className="content">
              <div className="section-intro">
                <h1>{clients.heading}</h1>
              </div>
              {renderList(clients.items, 'clients')}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Contacts />
    <Footer />
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
          heading
          items {
            image
            alt
          }
        }
      }
    }
  }
`
