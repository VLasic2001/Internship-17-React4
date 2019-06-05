import React, { Component } from "react";
import { nextPlayer } from "../redux/modules/board";
import { connect } from "react-redux";

class Scoreboard extends Component {
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.nextPlayer()}>Next Player</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = {
  nextPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoreboard);
