import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Game from "./components/Game";
import store from "./redux/index";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Game />
        </Provider>
      </div>
    );
  }
}

export default App;
