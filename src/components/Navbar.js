import React from 'react'
import { Sliders } from 'react-feather'
import logo from '../images/InfoGenie.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" /></a>

          <nav className="nav w-100 justify-content-end">
            <a className="nav-link" href="#"><Sliders size={20} /> Manage</a>
          </nav>
        </nav>
    )
}
