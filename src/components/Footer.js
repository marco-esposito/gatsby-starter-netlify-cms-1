import React from 'react'
import facebook from '../img/socials/facebook.png'

const Footer = () => (
  <footer id="footer">
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column">
          <div className="content">
            <div className="socials">
              <img src={facebook} alt="Our Facebook"/>
              <img src={facebook} alt="Our Facebook"/>
              <img src={facebook} alt="Our Facebook"/>
              <img src={facebook} alt="Our Facebook"/>
            </div>
            <div className="data">
              P.Iva. 36725131675163
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
