import React, { useState } from "react";
import Board from "./Board";
import TurnMessage from "./TurnMessage";

const Game = () => {
    const [gameTurn, setGameTurn] = useState()

    return (
        <>
            <TurnMessage messageTurn={gameTurn} />
            <Board setGameTurn={setGameTurn} />
        </>
    );
};

export default Game;
