import React, { Component } from "react";
import { nextPlayer } from "../redux/modules/board";
import { connect } from "react-redux";

class Scoreboard extends Component {
  render() {
    const currentPlayer = this.props.players[this.props.currentPlayerId - 1];
    return (
      <div>
        <h1 onClick={() => this.props.nextPlayer()}>Next Player</h1>
        {this.props.players.map(player => {
          return player.id === this.props.currentPlayerId ? (
            <div style={{ fontWeight: 900 }}>{player.name}</div>
          ) : (
            <div>{player.name}</div>
          );
        })}
        <div>
          <br />
          <span>Lumber: {currentPlayer.lumber}</span>
          <br />
          <span>Wool: {currentPlayer.wool}</span>
          <br />
          <span>Wood: {currentPlayer.wood}</span>
          <br />
          <span>Brick: {currentPlayer.brick}</span>
          <br />
          <span>Ore: {currentPlayer.ore}</span>
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
  currentPlayerId: state.currentPlayerId
});

const mapDispatchToProps = {
  nextPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoreboard);
