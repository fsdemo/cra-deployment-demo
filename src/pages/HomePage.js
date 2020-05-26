import React, { Component } from 'react'
import HomeDog from '../images/homeDog.jpg'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is the Home Page</h1>
        <p>The home page is where you land when you get to the site or when you navigate to the root url.</p>
        <img src={HomeDog} alt="Home Dog is Home" width="500" />
      </div>
    )
  }
}

export default HomePage
