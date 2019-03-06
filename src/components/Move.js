import React from "react";
import PropTypes from "prop-types";

/**
 * Move selected by a user in a previous turn.
 * @param {number} square  Number of the square selected in the move.
 * @param {number} step    Number of the turn of the game.
 * @param {number} col     Column where the square of the move is located on the board.
 * @param {number} row     Row where the square of the move is located on the board.
 * @param {func} onClick Callback function to jump to a previous state of the game.
 */
const Move = ({ square, step, col, row, onClick }) => (
  <button
    className={square === step ? "currentMove" : "move"}
    onClick={onClick}
  >
    Go to move #{square} COL: {col} ROW: {row}
  </button>
);

Move.propTypes = {
  square: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Move;
