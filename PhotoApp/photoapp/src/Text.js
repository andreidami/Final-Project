import React, { Component } from "react";

class Text extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }
  //   html5<textarea>Tag

  render() {
    return (
      <>
        <p className="Req-photo">Request Photo</p>
        <div>
          <label>Photo Description : </label>
          <textarea
            value={this.state.textAreaValue}
            onChange={this.handleChange}
            rows={10}
            cols={100}
          />
        </div>
      </>
    );
  }
}

export default Text;
