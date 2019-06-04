import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { buildSettlement } from "../redux/modules/board";

class Crossroad extends Component {
  render() {
    return (
      <div
        onClick={() =>
          this.props.buildSettlement(
            this.props.id,
            this.props.crossroadType,
            this.props.hexId
          )
        }
        className={this.props.crossroadType}
        style={{ backgroundColor: this.props.color }}
      />
    );
  }
}

const mapDispatchToProps = {
  buildSettlement
};
export default connect(
  null,
  mapDispatchToProps
)(Crossroad);
