import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { buildRoad } from "../redux/modules/board";

class Road extends Component {
  render() {
    return (
      <div
        onClick={() =>
          this.props.buildRoad(
            this.props.id,
            this.props.roadType,
            this.props.color,
            this.props.hexId
          )
        }
        className={this.props.roadType}
        style={{ backgroundColor: this.props.color }}
      />
    );
  }
}

const mapDispatchToProps = {
  buildRoad
};
export default connect(
  null,
  mapDispatchToProps
)(Road);
