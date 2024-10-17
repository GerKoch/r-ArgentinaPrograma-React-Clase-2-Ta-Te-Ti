import { useState } from "react";
import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import { Turns } from "./assets/Constants";
import { checkWinner, checkedGame } from "./logic/board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turns.X);
  const [winner, setWiner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turns.X);
    setWiner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard)
      if (newWinner) {
        setWiner(newWinner)
      } else if (checkedGame(newBoard)) {
        setWiner(false)
      }
  };

  return (
    <main className="board">
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>Volver a jugar</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
        <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
      </section>
      <section>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </section>
    </main>
  )
};

export default App  
