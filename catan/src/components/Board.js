import React, { Component } from "react";
import Hexagon from "./Hexagon";
import store from "../redux";
import { connect } from "react-redux";
import { setBoard } from "../redux/modules/board";

class Board extends Component {
  render() {
    return (
      <div className="field">
        <div className="field-row">
          <Hexagon tile={this.props.tiles[0]} />
          <Hexagon tile={this.props.tiles[1]} />
          <Hexagon tile={this.props.tiles[2]} />
        </div>
        <div className="field-row">
          <Hexagon tile={this.props.tiles[3]} />
          <Hexagon tile={this.props.tiles[4]} />
          <Hexagon tile={this.props.tiles[5]} />
          <Hexagon tile={this.props.tiles[6]} />
        </div>
        <div className="field-row">
          <Hexagon tile={this.props.tiles[7]} />
          <Hexagon tile={this.props.tiles[8]} />
          <Hexagon tile={this.props.tiles[9]} />
          <Hexagon tile={this.props.tiles[10]} />
          <Hexagon tile={this.props.tiles[11]} />
        </div>
        <div className="field-row">
          <Hexagon tile={this.props.tiles[12]} />
          <Hexagon tile={this.props.tiles[13]} />
          <Hexagon tile={this.props.tiles[14]} />
          <Hexagon tile={this.props.tiles[15]} />
        </div>
        <div className="field-row">
          <Hexagon tile={this.props.tiles[16]} />
          <Hexagon tile={this.props.tiles[17]} />
          <Hexagon tile={this.props.tiles[18]} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tiles: state.tiles[0]
});

const mapDispatchToProps = {
  setBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
