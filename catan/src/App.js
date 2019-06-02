import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Board from "./components/Board";
import store from "./redux/index";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Board />
        </Provider>
      </div>
    );
  }
}

export default App;
