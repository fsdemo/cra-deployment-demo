import React from 'react'
import OneDog from '../images/oneDog.jpg'

export default function FirstPage() {
  return (
    <div>
      <h1>Page One</h1>
      <p>One Dog</p>
      <img src={OneDog} alt="One Dog" width="500" />
    </div>
  )
}
