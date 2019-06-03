import React, { Component } from "react";
import "../App.css";

class Crossroad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      color: "green"
    }));
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={this.props.crossroadType}
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}

export default Crossroad;
