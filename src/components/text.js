import React from 'react'
import Paragraph from './paragraph.js'

class Text extends React.Component {
  render() {
    let paragraphs = []
    for (var p=0; p < 3; p++) {
      paragraphs.push(<Paragraph key={p}/>)
    }
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
        {paragraphs}
      </div>
    )
  }
}

export default Text
