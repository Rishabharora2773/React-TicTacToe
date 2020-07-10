import React, {useState} from "react";
import Board from "./Board";
import calculateWinner from "../helpers";

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setisXNext] = useState(true);
    const winner = calculateWinner(board);
        
    const handleClick = (i) => {
        // check if winner or clicking on already occupied cell
        if(winner==='X' || winner==='O' || board[i]) return;
        
        // make a board copy
        const boardCopy = [...board];
        // put 'X' or 'O'
        boardCopy[i] = isXNext ? 'X' : 'O';
        setBoard(boardCopy);
        setisXNext(!isXNext);
    }
    
    const resetGame = () => {
        const boardCopy = Array(9).fill(null);
        setBoard(boardCopy);
    }
     
    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div className="details">
                <p> {winner ? ((winner === 'X' || winner === 'O')? 'Winner: '+ winner : 'Game Draw!') : 'Next Player: ' + (isXNext ? 'X' : 'O')} </p>
                <button className="button" onClick={resetGame}> Reset Game </button>
            </div> 
        </>
    );    
}

export default Game;