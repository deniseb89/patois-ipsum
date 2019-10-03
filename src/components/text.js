import React from 'react'
import { Patois } from '../patois'

class Text extends React.Component {
  getSentenceIndices() {
    const indices = new Set();
    let arrLength = Patois.length-1
    for(let i=0; i<12; i++) {
      let rand = Math.floor(Math.random() * arrLength)
      while (indices.has(rand)) {
        rand = Math.floor(Math.random() * arrLength--)
      }
      indices.add(rand)
    }
    return indices
  }

  generateParagraphs() {
    let indices = this.getSentenceIndices()
    let paragraphs = []
    indices.forEach(value => {
      paragraphs.push(
        <span>{Patois[value]}</span>
      )
    })
    return paragraphs
  }

  render() {
    return (
      <div id="copyText"
        style={{
          backgroundColor: `rgba(0,0,0,0.4)`,
          color: `white`,
          fontSize: `x-large`,
          lineHeight: `normal`,
          padding: `0.75rem`,
        }}
      >
        {this.generateParagraphs()}
      </div>
    )
  }
}

export default Text
