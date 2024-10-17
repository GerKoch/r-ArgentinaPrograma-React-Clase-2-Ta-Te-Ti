import { WinnerCombos } from "../assets/Constants";

export const checkedGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
};

export const checkWinner = (boardToCheck) => {
    for (const combo of WinnerCombos) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null
};