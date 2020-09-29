import React from "react";

function Square(props) {
    return (
        <button className="square" onClick={props.onClick} id={props.id}>
            {props.value}
        </button>
    );    
}

export default Square;