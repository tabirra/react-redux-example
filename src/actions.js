/***
 * Action names
 */
/**
 * Action taken when the user selects a square.
 * @type {String}
 */
export const SELECT_SQUARE = "SELECT_SQUARE"
/**
 * Action taken when the user selects a previous move taken.
 * @type {String}
 */
export const GO_TO_MOVE = "GO_TO_MOVE"
/**
 * Action taken when the user chooses to switch the order of the MoveList.
 * @type {String}
 */
export const TOGGLE_ORDER = "TOGGLE_ORDER"

/**
 * Action trigger to modify state based on the square selection.
 * @param  {object} square
 * @return {Object}        new state
 */
export function selectSquare(square) {
  return {
    type: "SELECT_SQUARE",
    square
  }
}

/**
 * Action trigger to modify the state of the game to a previous move.
 * @param  {object} move old state
 * @return {object}      new state
 */
export function goToMove(move) {
  return {
    type: "GO_TO_MOVE",
    move
  }
}

/**
 * Action trigger to invert the order of the moves shown in the move list.
 * @return {object} new state
 */
export function toggleOrder() {
  return {
    type: "TOGGLE_ORDER"
  }
}
