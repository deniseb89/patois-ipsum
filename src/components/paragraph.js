import React from 'react'
import Sentence from './sentence.js'

class Paragraph extends React.Component {
  render() {
    let sentences = []
    for(var s=0; s<4; s++) {
      sentences.push(<Sentence key={s}/>)
    }
    return (
      <p>{sentences}</p>
    );
  }
}

export default Paragraph
