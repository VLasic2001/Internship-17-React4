import React, { Component } from "react";
import { nextPlayer } from "../redux/modules/board";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Scoreboard extends Component {
  render() {
    if (this.props.players) {
      const currentPlayer = this.props.players[this.props.currentPlayerId - 1];
      return (
        <div>
          <h1 onClick={() => this.props.nextPlayer()}>Next Player</h1>
          {this.props.players.map(player => {
            return player.id === this.props.currentPlayerId &&
              this.props.turn > 1 ? (
              <div style={{ fontWeight: 900 }} key={player.id}>
                {player.name} - {player.points} points (color: {player.color})
              </div>
            ) : (
              <div key={player.id}>
                {player.name} - {player.points} points (color: {player.color})
              </div>
            );
          })}
          <br />
          <div>Rolled: {this.props.roll}</div>
          <div>
            <br />
            <span>Lumber: {currentPlayer.lumber}</span>
            <br />
            <span>Wool: {currentPlayer.wool}</span>
            <br />
            <span>Grain: {currentPlayer.grain}</span>
            <br />
            <span>Brick: {currentPlayer.brick}</span>
            <br />
            <span>Ore: {currentPlayer.ore}</span>
            <br />
          </div>
          <br />
          <div>
            <h4>Costs</h4>
            <p>Road: 1 lumber & 1 brick</p>
            <p>Settlement: 1 lumber, 1 brick, 1 wool & 1 grain</p>
            <p>City: 2 wool & 3 ore</p>
          </div>
        </div>
      );
    } else {
      return <Redirect to="" />;
    }
  }
}

const mapStateToProps = state => ({
  players: state.players,
  currentPlayerId: state.currentPlayerId,
  roll: state.roll,
  turn: state.turn
});

const mapDispatchToProps = {
  nextPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoreboard);
