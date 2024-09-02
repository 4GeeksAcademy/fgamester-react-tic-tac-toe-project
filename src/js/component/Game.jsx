import React, { useState } from "react";
import Board from "./Board";
import TurnMessage from "./TurnMessage";

const Game = () => {
    const [gameTurn, setGameTurn] = useState(true)
    const [playing, setPlaying] = useState(true)
    const [winner, setWinner] = useState(false)

    return (
        <>
            <TurnMessage gameTurn={gameTurn} winner={winner} />
            <Board gameTurn={gameTurn} setGameTurn={setGameTurn} setPlaying={setPlaying} playing={playing} setWinner={setWinner} />
        </>
    );
};

export default Game;
