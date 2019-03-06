import { combineReducers } from "redux";
import moves from "./moves";
import squares from "./squares";

/**
 * Root reducer for the Tic Tac Toe game.
 */
export default combineReducers({
  moves,
  squares
});
