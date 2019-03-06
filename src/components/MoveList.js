import React, { Component } from "react";
import PropTypes from "prop-types";
import Move from "./Move";

/**
 * Button list to toggle the order of the moves made in a game, restart the game
 * or jump to a previous move of the current game.
 * @type {Object}
 */
export default class MoveList extends Component {
  /**
   * Function that prepares the moves list for rendering.
   * @return {Array} Array containing the current list of moves for the game.
   */
  printMoveList() {
    let list = [];
    let moveList = [];
    let desc = "Go to game start";
    moveList.push(
      <div key="restart_toggle" className="restart_toggle">
        <button
          key={-1}
          onClick={() => this.props.switchOrderList(this.props.ascending)}
        >
          {"Switch order"}
        </button>
        <button key={0} onClick={() => this.props.jumpTo(0)}>
          {desc}
        </button>
      </div>
    );

    if (this.props.ascending) {
      for (let i = 1; i < this.props.step + 1; i++) {
        let col = calculateCol(this.props.moves[i]);
        let row = calculateRow(this.props.moves[i]);
        moveList.push(
          <li key={i}>
            <Move
              key={i}
              square={i}
              step={this.props.step}
              col={col}
              row={row}
              onClick={() => this.props.jumpTo(i)}
            />
          </li>
        );
      }
    } else {
      for (let i = this.props.step; i > 0; i--) {
        let col = calculateCol(this.props.moves[i]);
        let row = calculateRow(this.props.moves[i]);
        moveList.push(
          <li key={i}>
            <Move
              key={i}
              square={i}
              step={this.props.step}
              col={col}
              row={row}
              onClick={() => this.props.jumpTo(i)}
            />
          </li>
        );
      }
    }

    list.push(
      <ol key={1} className="move-list">
        {moveList}
      </ol>
    );

    return list;
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return <div>{this.printMoveList()}</div>;
  }
}

MoveList.propTypes = {
  ascending: PropTypes.bool
};

/**
 * Function that calculates the row of a move based on the square selected.
 * @param  {number} move Number of the square selected in a move.
 * @return {number}      Column of the square selected in a move.
 */
function calculateCol(move) {
  let col = null;

  switch (move) {
    case 0:
    case 3:
    case 6:
      col = 1;
      break;
    case 1:
    case 4:
    case 7:
      col = 2;
      break;
    default:
      col = 3;
      break;
  }

  return col;
}

/**
 * Function that calculates the row of a move based on the square selected.
 * @param  {[type]} move Number of the square selected in a move.
 * @return {[type]}      Row of the square selected in a move.
 */
function calculateRow(move) {
  let row = null;

  switch (move) {
    case 0:
    case 1:
    case 2:
      row = 1;
      break;
    case 3:
    case 4:
    case 5:
      row = 2;
      break;
    default:
      row = 3;
      break;
  }

  return row;
}
