import { Square } from "./Square";

export const WinnerModal = ({ resetGame, winner }) => {
    if (winner === null) return null;

    const winnerText = winner === false ? 'Empate' : 'Ganador';

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <foother>
                    <button onClick={resetGame}>Volver a jugar</button>
                </foother>
            </div>
        </section>
    )
       

};

