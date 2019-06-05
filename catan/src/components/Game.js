import React, { Component } from "react";
import Board from "./Board";
import Scoreboard from "./Scoreboard";

class Game extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Scoreboard />
        <Board />
      </div>
    );
  }
}

export default Game;
