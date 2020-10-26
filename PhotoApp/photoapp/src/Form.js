import React, { Component } from "react";

export default class SignIn extends Component {
  state = {
    user: "",
    rememberMe: false,
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };
  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }

  render() {
    return (
      <>
        <p>Request Photo</p>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            User:{" "}
            <input
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="rememberMe"
              checked={this.state.rememberMe}
              onChange={this.handleChange}
              type="checkbox"
            />{" "}
            Remember me
          </label>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}
