import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import Game from "../containers/Game";

/**
 * [store description]
 * @type {[type]}
 */
const store = configureStore();

/**
 * [store description]
 * @type {Object}
 */
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}
