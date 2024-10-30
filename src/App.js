import React from "react";
import "./main.css";
import { marked } from "marked";
import example from "./markdownText.md";

marked.use({
  mangle: false,
  headerIds: false,
});

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  componentDidMount() {
    fetch(example)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ text });
      })
      .catch((error) => {
        console.log("Error reading Markdown file:", error);
      });
  }

  render() {
    return (
      <div id="container">
        <textarea
          type="text"
          id="editor"
          value={this.state.text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(this.state.text, { breaks: true }),
          }}
        />
      </div>
    );
  }
}

export default Markdown;
