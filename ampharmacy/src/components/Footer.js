import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div>
            <label>0800 111 222</label>
            <NavLink to="">FACEBOOK</NavLink>
            <NavLink to="">INSTAGRAM</NavLink>
            <NavLink to="">NEWSLETTER</NavLink>
        </div>
    </div>
  )
}
export { Footer as default }
