import React, { Component } from "react";
import ChildClassComponent from "./ChildClassComponent";

export default class PureClassComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
    };
  }

  // shouldComponentUpdate() {
  //   if (this.state.userName === "Anisul Islam") {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    const { userName } = this.state;
    console.log("rerender");
    return (
      <div>
        <ChildClassComponent userName={userName} />
        <h1>UserName : {userName}</h1>
        <button onClick={() => this.setState({ userName: "Anisul Islam" })}>
          set user
        </button>
      </div>
    );
  }
}
