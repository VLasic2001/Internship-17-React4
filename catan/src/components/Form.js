import React, { Component } from "react";
import { setupPlayers } from "../redux/modules/board";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneInput: "",
      playerTwoInput: "",
      playerThreeInput: "",
      playerFourInput: "",
      isSetup: false
    };
  }
  handleFirstNameChange(e) {
    this.setState({ playerOneInput: e.target.value });
  }
  handleSecondNameChange(e) {
    this.setState({ playerTwoInput: e.target.value });
  }
  handleThirdNameChange(e) {
    this.setState({ playerThreeInput: e.target.value });
  }
  handleFourthNameChange(e) {
    this.setState({ playerFourInput: e.target.value });
  }
  render() {
    if (!this.state.isSetup) {
      return (
        <div>
          <h1>Setup</h1>
          <input
            placeholder="First player's name"
            onChange={e => this.handleFirstNameChange(e)}
          />
          <br />
          <input
            placeholder="Second player's name"
            onChange={e => this.handleSecondNameChange(e)}
          />
          <br />
          <input
            placeholder="Third player's name"
            onChange={e => this.handleThirdNameChange(e)}
          />
          <br />
          <input
            placeholder="Fourth player's name"
            onChange={e => this.handleFourthNameChange(e)}
          />
          <br />
          <p>*Leave empty for less players</p>
          <Link
            to={"/game"}
            onClick={() => {
              this.props.setupPlayers([
                this.state.playerOneInput,
                this.state.playerTwoInput,
                this.state.playerThreeInput,
                this.state.playerFourInput
              ]);
              this.setState({ isSetup: true });
            }}
          >
            Play!
          </Link>
        </div>
      );
    }
  }
}

const mapDispatchToProps = {
  setupPlayers
};
export default connect(
  null,
  mapDispatchToProps
)(Form);
