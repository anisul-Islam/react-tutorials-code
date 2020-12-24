//class component example
import React, { Component } from "react";

export default class USE_EFFECT1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.counter} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("updating the document");
      document.title = `Clicked ${this.state.counter} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
