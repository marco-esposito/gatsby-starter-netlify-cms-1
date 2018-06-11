import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div className="animated fadeIn" id="home-page">
    <Helmet>
      <title>Blackdee Page</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
      />
    </Helmet>
    {/* <Navbar /> */}
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
