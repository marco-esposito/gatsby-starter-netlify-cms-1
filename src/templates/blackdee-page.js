import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Navigation from '../components/Navigation'
import Video from '../components/Video'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

const renderList = (list, className) => (
  list.map((item, index) => (
    <div className={className} key={index}>
      <div className="columns">
        <div className="column image is-6">
          {item.image ? (
            <img src={item.image} alt={item.alt} />
          )
          : null}
        </div>
        <div className="column text is-6">
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
      </div>
    </div>
  ))
)

const renderClients = (items) => (
  items.map((item, index) => (
    <div className="item" key={index}>
      <img src={item.image} alt={item.alt} />
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
    <Navigation />
    <Video />
    <section className="section odd" id="about-us">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-9 is-offset-3">
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
          <div className="column is-9 is-offset-3">
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
    <section className="section odd" id="clients">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-9 is-offset-3">
            <div className="content">
              <div className="section-intro">
                <h1>{clients.heading}</h1>
              </div>
              <div className="items">
                {renderClients(clients.items)}
              </div>
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
  clients: PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.array,
  }),
}

const BlackdeePageOld = ({ data }) => {
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

BlackdeePageOld.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BlackdeePageOld

export const blackdeePageQuery = graphql`
  query BlackdeePageOld($id: String!) {
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
