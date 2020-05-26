import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/one">First Page</Link>
        </li>
        <li>
          <Link to="/two">Second Page</Link>
        </li>
        <li>
          <Link to="/three">Third Page</Link>
        </li>
      </ul>
    )
  }
}

export default Nav
