import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { buildSettlement } from "../redux/modules/board";

class Crossroad extends Component {
  render() {
    const style = {
      backgroundColor: this.props.color,
      border: this.props.settlementType === "city" ? "3px purple solid" : "0px"
    };
    return (
      <div
        onClick={() =>
          this.props.buildSettlement(
            this.props.id,
            this.props.crossroadType,
            this.props.hexId,
            this.props.settlementType
          )
        }
        className={this.props.crossroadType}
        style={style}
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
