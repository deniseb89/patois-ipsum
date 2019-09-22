import React from 'react'
import Paragraph from './paragraph.js'

class Text extends React.Component {
  constructor() {
    super()
    this.state = {
      copied: `Copy Text`
    }
  }

  copyText() {
    let copyText = document.getElementById("copyText").innerText
    navigator.clipboard.writeText(copyText)
    this.setState({
      copied: `Copied! ✓`
    })
  }

  render() {
    let paragraphs = []
    for (var p=0; p < 3; p++) {
      paragraphs.push(<Paragraph key={p}/>)
    }
    return (
      <section>
        <a
          id="copyBtn"
          href="#" onClick={this.copyText.bind(this)}
          style={{
            color: `white`,
            display: `block`,
            fontSize: `large`,
            textAlign: `center`,
            textShadow: `1px 1px 2px #1f1c1c`
          }}
        >
          {this.state.copied}
        </a>
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
      </section>
    )
  }
}

export default Text
