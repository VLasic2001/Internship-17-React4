import React, { Component } from "react";
import Hexagon from "./Hexagon";
import store from "../redux";
import { connect } from "react-redux";
import { setBoard } from "../redux/modules/board";

class Board extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="field">
        <div className="field-row">
          <Hexagon
            color={this.props.tiles[0][0].color}
            value={this.props.tiles[0][0].value}
          />
          <Hexagon
            color={this.props.tiles[0][1].color}
            value={this.props.tiles[0][1].value}
          />
          <Hexagon
            color={this.props.tiles[0][2].color}
            value={this.props.tiles[0][2].value}
          />
        </div>
        <div className="field-row">
          <Hexagon
            color={this.props.tiles[0][3].color}
            value={this.props.tiles[0][3].value}
          />
          <Hexagon
            color={this.props.tiles[0][4].color}
            value={this.props.tiles[0][4].value}
          />
          <Hexagon
            color={this.props.tiles[0][5].color}
            value={this.props.tiles[0][5].value}
          />
          <Hexagon
            color={this.props.tiles[0][6].color}
            value={this.props.tiles[0][6].value}
          />
        </div>
        <div className="field-row">
          <Hexagon
            color={this.props.tiles[0][7].color}
            value={this.props.tiles[0][7].value}
          />
          <Hexagon
            color={this.props.tiles[0][8].color}
            value={this.props.tiles[0][8].value}
          />
          <Hexagon
            color={this.props.tiles[0][9].color}
            value={this.props.tiles[0][9].value}
          />
          <Hexagon
            color={this.props.tiles[0][10].color}
            value={this.props.tiles[0][10].value}
          />
          <Hexagon
            color={this.props.tiles[0][11].color}
            value={this.props.tiles[0][11].value}
          />
        </div>
        <div className="field-row">
          <Hexagon
            color={this.props.tiles[0][12].color}
            value={this.props.tiles[0][12].value}
          />
          <Hexagon
            color={this.props.tiles[0][13].color}
            value={this.props.tiles[0][13].value}
          />
          <Hexagon
            color={this.props.tiles[0][14].color}
            value={this.props.tiles[0][14].value}
          />
          <Hexagon
            color={this.props.tiles[0][15].color}
            value={this.props.tiles[0][15].value}
          />
        </div>
        <div className="field-row">
          <Hexagon
            color={this.props.tiles[0][16].color}
            value={this.props.tiles[0][16].value}
          />
          <Hexagon
            color={this.props.tiles[0][17].color}
            value={this.props.tiles[0][17].value}
          />
          <Hexagon
            color={this.props.tiles[0][18].color}
            value={this.props.tiles[0][18].value}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tiles: state.tiles
});

const mapDispatchToProps = {
  setBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
