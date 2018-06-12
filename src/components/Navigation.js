import React from 'react'
import { Link } from 'react-scroll'

const scrollDown = (id, text) => (
  <Link
    className="scroll-down"
    activeClass="is-active"
    to={id}
    data-offset="-45"
    spy
    hashSpy
    smooth
    duration={500}
  >
    {text}
  </Link>
)

const Navigation = () => (
  <div className="container is-fullhd">
    <aside className="menu">
      <div className="logo">Logo</div>
      <ul className="menu-list">
        <li>{scrollDown('about-us', 'About Us')}</li>
        <li>{scrollDown('services', 'Services')}</li>
        <li>{scrollDown('clients', 'Clients')}</li>
        <li>{scrollDown('contacts', 'Contacts')}</li>
      </ul>
    </aside>
  </div>
)

export default Navigation
