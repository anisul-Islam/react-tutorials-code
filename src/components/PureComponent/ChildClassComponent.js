import React, { Component } from "react";

export default class ChildClassComponent extends Component {
  render() {
    console.log("rerender in childClassComponent");
    return (
      <div>
        <h2>ChildClassComponent : {this.props.userName}</h2>
      </div>
    );
  }
}
