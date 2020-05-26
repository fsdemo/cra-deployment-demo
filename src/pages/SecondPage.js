import React from 'react'
import TwoDogs from '../images/twoDog.jpg'

export default function SecondPage() {
  return (
    <div>
      <h1>Page Two</h1>
      <p>Two dogs on page two.</p>
      <img src={TwoDogs} alt="Two Dogs" width="500" />
    </div>
  )
}
