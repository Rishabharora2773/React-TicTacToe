import React from "react";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <h1 className="title"> React Tic-Tac-Toe </h1>
            <Game />
            <Footer />
        </>
    );
}

export default App;