import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Board from "../components/Board";
import MoveList from "../components/MoveList";

/**
 * [state description]
 * @type {Object}
 */
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      moves: Array(10).fill(null),
      ascending: true
    };
    this.jumpTo = this.jumpTo.bind(this);
    this.switchOrderList = this.switchOrderList.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const moves = this.state.moves.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    moves[this.state.stepNumber + 1] = i;
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      moves: moves
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  switchOrderList(order) {
    this.setState({
      ascending: !order
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const winnerLine = calculateWinnerLine(current.squares);
    const moves = this.state.moves.slice();

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (this.state.stepNumber === 9) {
      status = "Draw ";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-header">
          <Header status={status} />
        </div>
        <div className="game-board">
          <Board
            winner={!winnerLine ? [] : winnerLine}
            selected={moves[this.state.stepNumber]}
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <MoveList
            step={this.state.stepNumber}
            moves={moves}
            ascending={this.state.ascending}
            jumpTo={this.jumpTo}
            switchOrderList={this.switchOrderList}
          />
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  step: PropTypes.number,
  moves: PropTypes.array,
  ascending: PropTypes.bool,
  jumpTo: PropTypes.number,
  switchOrderList: PropTypes.bool
};

/**
 * [calculateWinner description]
 * @param  {[type]} squares [description]
 * @return {[type]}         [description]
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * [calculateWinnerLine description]
 * @param  {[type]} squares [description]
 * @return {[type]}         [description]
 */
function calculateWinnerLine(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let lineArr = [];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      lineArr = lineArr.concat(lines[i]);
    }
  }

  return lineArr;
}
