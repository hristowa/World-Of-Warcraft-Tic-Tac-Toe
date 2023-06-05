import "./gameStyle.css";
import { useState } from "react";
//img for player1
const alliance = (
  <img className="imgTicTacToe" src={require("./img/alliance.png")} alt="" />
);
//img for player2
const horde = (
  <img className="imgTicTacToe" src={require("./img/horde.png")} alt="" />
);

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = alliance;
    } else {
      nextSquares[i] = horde;
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  //calculate winner (what to display)
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "VICTORY!";
  } else {
    status = "Victory... or death.";
  }
  //button for restart func
  const handleRestart = () => {
    setXIsNext(true);
    setSquares(Array(9).fill(null));
  };
  //calculate winner END

  return (
    <>
      <div className="wow-logo">
        <img src={require("./img/World-Of-Warcraft-Logo.png")} alt="" />
      </div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="restart-btn">
        <button className="restart" onClick={handleRestart}>
          Play again
        </button>
      </div>
      <div className="orc-wow">
        <img
          className="orc-wow-img"
          src={require("./img/orc-wow.png")}
          alt=""
        />
      </div>
    </>
  );
};
//calculate winner func
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
} 
