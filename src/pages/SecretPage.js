import React, { Component } from 'react'
import GoodDog from '../images/goodDog.png'

export class SecretPage extends Component {
  render() {
    return (
      <div>
        <h1>Error Page</h1>
        <p>Your url was invalid.  That's ruff.</p>
        <img src={GoodDog} alt="The Goodest Doggo" width="500" />
      </div>
    )
  }
}

export default SecretPage
