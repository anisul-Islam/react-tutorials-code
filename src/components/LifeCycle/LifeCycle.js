import React, { Component } from "react";

// Mounting -> constructor -> render -> componentDidMount
// Updating -> state/props -> render ->
// Unmounting
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    {
      console.log("render");
    }
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
