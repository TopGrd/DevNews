import React from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from '../config'
import './Header.css'

const Header = ({ navs }) => {
  function generateNavs(navs) {
    return navs.map((nav, i) => (
      <li key={`nav-${i}`}>
        <NavLink exact activeClassName="nav-active" to={`/${nav.uri}`}>
          <i className={`mi-${nav.icon}`} />
          <span>{nav.title}</span>
        </NavLink>
      </li>
    ))
  }

  return (
    <div className="header">
      <div className="header-container">
        {/* <div className="header-container-logo">logo</div> */}
        <div className="header-container-nav">
          <div className="navigator">
            <ul>{generateNavs(nav)}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
