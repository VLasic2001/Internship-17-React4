import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Game from "./components/Game";
import Form from "./components/Form";
import store from "./redux/index";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={props => <Form {...props} />} />
              <Route path="/game" render={props => <Game {...props} />} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
