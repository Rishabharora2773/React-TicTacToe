import React from "react";
import Square from "./Square";

function Board(props) {
    const squares = props.squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => props.onClick(i)} id={i}/>
    ));
    
    return (    
        <div className="board">
            {squares}            
        </div>        
    );    
}

export default Board;