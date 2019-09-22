import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "../components/text"

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      text: null
    };
  }

  generateText() {
    this.setState({
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
        <button
          style={{
            backgroundColor: `#1f1c1c`,
            borderRadius: `5px`,
            color: `white`,
            display: `block`,
            fontWeight: `bold`,
            margin: `0 auto`,
            padding: `0.5rem 0`,
            textAlign: `center`,
            width: `10rem`
          }}
          onClick={this.generateText.bind(this)}
        >
          Gi mi di ting
        </button>
        <div>{this.state.text}</div>
      </Layout>
    )
  }
}

export default IndexPage
