import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  return (
    <div className="header-bg">
      <div className="header-content">
        <div className="header-text">
          <NavLink to="">AKCIJE</NavLink>
        </div>
        <div className="header-text">
          <NavLink to="">NOVI PROIZVODI</NavLink>
        </div>
        <div className="header-text">
          <NavLink to="">SUPLEMENTI</NavLink>
        </div>
        <div className="header-text">
          <NavLink to="">DERMOKOZMETIKA</NavLink>
        </div>
        <div className="header-text">
          <NavLink to="">HIGIJENA</NavLink>
        </div>
        <div className="header-text">
          <NavLink to="">LEPOTA</NavLink>
        </div>
        <div className="header-text">
          <NavLink to="">MEDICINSKA OPREMA</NavLink>
        </div>
        <div className="header-text">
          <NavLink to="">BEBE</NavLink>
        </div>
      </div>
    </div>
  )
}
export { Header as default }
