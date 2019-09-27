import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "../components/text"

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      copied: `Copy Text`,
      text: null
    };
  }

  copyText() {
    let copyText = document.getElementById("copyText").innerText
    navigator.clipboard.writeText(copyText)
    this.setState({
      copied: `Copied! ✓`
    })
  }

  generateText() {
    this.setState({
      copied: `Copy Text`,
      text: <Text/>
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Patois Ipsum" />
        <h1
          style={{
            color: `white`,
            textAlign: `center`,
            textShadow: `1px 1px 2px #1f1c1c`
          }}
        >
          What a gwaan?
        </h1>
        <p
          style={{
            color: `white`,
            fontSize: `x-large`,
            lineHeight: `normal`,
            textAlign: `center`,
            textShadow: `1px 1px 2px #1f1c1c`
          }}
        >
          Click the button below to generate a passage of dummy text, Jamaican Patois style.
        </p>
        <div style={{textAlign: `center`}}>
          <button
            style={{
              backgroundColor: `#1f1c1c`,
              borderRadius: `5px`,
              color: `white`,
              cursor: `pointer`,
              fontWeight: `bold`,
              padding: `0.5rem 0`,
              textAlign: `center`,
              width: `10rem`,
            }}
            onClick={this.generateText.bind(this)}
          >
            Gi mi di ting
          </button>
          <button
            id="copyBtn"
            onClick={this.copyText.bind(this)}
            style={{
              background: `none`,
              border: `none`,
              color: `white`,
              cursor: `pointer`,
              fontSize: `large`,
              textAlign: `center`,
              textDecoration: `underline`,
              textShadow: `1px 1px 2px #1f1c1c`,
            }}
          >
            {this.state.copied}
          </button>
        </div>
        <div>{this.state.text}</div>
      </Layout>
    )
  }
}

export default IndexPage
