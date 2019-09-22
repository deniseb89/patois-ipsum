import React from 'react'
import { Patois } from '../patois'

class Sentence extends React.Component {
  render() {
    let random = Math.floor(Math.random() * 9)
    return (
      <span
        style={{
          lineHeight: `1.3`
        }}
      >
        {Patois[random]}
      </span>
    );
  }
}

export default Sentence
