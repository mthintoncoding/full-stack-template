import React from 'react'
import { Link } from 'react-router'
import { logoutUser } from '../actions'
import { connect } from 'react-redux'
import '../App.css'


const Navbar = (props) => (
  <div>
  <div className="Navbar">
    <Link to='/'>
      <p>Home</p>
    </Link>

    <Link to='/about'>
      <p>About</p>
    </Link>

    <Link to='/news'>
      <p>News</p>
    </Link>

    <Link to='/services'>
      <p>Services</p>
    </Link>

    <Link to='/contact'>
      <p>Contact</p>
    </Link>

  <Link to='#' onClick={(event) => props.dispatch(logoutUser())}>
    <p>Logout</p>
  </Link>
  </div>
    {props.children}
  </div>
)

export default connect()(Navbar)
