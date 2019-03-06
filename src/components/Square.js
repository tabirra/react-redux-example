import React from "react";
import PropTypes from "prop-types";

/**
 * Component that defines a square form the board.
 * @param {char} value    Character describing the player who choose the square(O or X)
 * @param {function} onClick  Callback function to handle the user selecting the square.
 * @param {number} selected Number of the square selected by the user on the current turn [0...9]
 * @param {number} number   Number of the square on the board [0...9]
 * @param {array} winner   Collection of the number of the squares for the winning line/s.
 */
const Square = ({ value, onClick, selected, number, winner }) => (
  <button
    key={number}
    className={
      selected === null
        ? "square"
        : selected === number || winner.includes(number)
        ? "selSquare"
        : "square"
    }
    onClick={onClick}
  >
    {value}
  </button>
);

Square.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Square;
