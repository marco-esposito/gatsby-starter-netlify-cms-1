import React from 'react'

const Navigation = ( { headings } ) => (
  <div className="left-side">
    <aside className="menu">
      <div className="logo">Logo</div>
      <ul className="menu-list">
        <li><a href="#about-us">{headings.aboutUs}</a></li>
        <li><a href="#services">{headings.services}</a></li>
        <li><a href="#clients">{headings.clients}</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
    </aside>
  </div>
)

export default Navigation
