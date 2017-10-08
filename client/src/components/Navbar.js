import React from 'react'
import { Link } from 'react-router'
import { logoutUser } from '../actions'
import { connect } from 'react-redux'
import '../App.css'


const Navbar = (props) => (
  <div>
  <div className="Navbar">
    <p className="navbarText"> H. Smith Barber Shop </p>
    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>

    <ul className="navMenu" id="menu">

    <Link to='/'>
      <li>Home</li>
    </Link>

    <Link to='/about'>
      <li>About</li>
    </Link>

    <Link to='/news'>
      <li>News</li>
    </Link>

    <Link to='/services'>
      <li>Services</li>
    </Link>

    <Link to='/contact'>
      <li>Contact</li>
    </Link>

    {props.loggedIn ?
  <Link to='#' onClick={(event) => props.dispatch(logoutUser())}>
    <li>Logout</li>
  </Link>
: ''}
</ul>
  </div>
    {props.children}
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.clientManager.isLoggedIn
  }
}

export default connect(mapStateToProps)(Navbar)
