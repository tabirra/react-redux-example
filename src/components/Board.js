import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "./Square";

/**
 * Game board for Tic Tac Toe
 * @type {Object}
 */
export default class Board extends Component {
  /**
   * Function that renders the squares of the board.
   * @param  {number} i Value of the square[0...9]
   * @return {object}   Square component with it's values set.
   */
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        number={i}
        selected={this.props.selected}
        winner={this.props.winner}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  /**
   * Function that prints the board using a loop.
   * @return {Array} Array containing the squares of the board.
   */
  printBoard() {
    let board = [];
    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      let boardRow = [];
      //Inner loop to create children
      for (let j = i * 3; j < i * 3 + 3; j++) {
        boardRow.push(this.renderSquare(j));
      }
      //Create the parent and add the children
      board.push(
        <div key={i} className="board-row">
          {boardRow}
        </div>
      );
    }
    return board;
  }

  render() {
    return <div>{this.printBoard()}</div>;
  }
}

Board.propTypes = {
  winner: PropTypes.array,
  selected: PropTypes.number,
  onClick: PropTypes.func.isRequired
};
