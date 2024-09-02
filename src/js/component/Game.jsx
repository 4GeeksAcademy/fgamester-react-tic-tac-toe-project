import React, { useState } from "react";
import Board from "./Board.jsx";
import GameMesage from "./GameMessage.jsx";
import TurnSelector from "./TurnSelector.jsx";
import Restart from "./Restart.jsx";

const Game = () => {
    const [inMenu, setInMenu] = useState(true)
    const [gameTurn, setGameTurn] = useState(true)
    const [playing, setPlaying] = useState(false)
    const [winner, setWinner] = useState(false)
    const [count, setCount] = useState(0)
    const [restart, setRestart] = useState(false)
    // const [key, setKey] = useState(0)

    const selector = <TurnSelector setGameTurn={setGameTurn} setInMenu={setInMenu} setPlaying={setPlaying} />
    const theGame = <Board setRestart={setRestart} gameTurn={gameTurn} setGameTurn={setGameTurn} setPlaying={setPlaying} playing={playing} winner={winner} setWinner={setWinner} count={count} setCount={setCount} />
    const turnMessage = <GameMesage gameTurn={gameTurn} winner={winner} count={count} />
    const restartButton = <Restart setCount={setCount} setWinner={setWinner} setInMenu={setInMenu} setPlaying={setPlaying} setRestart={setRestart} />

    return (
        <>
            {inMenu ? (
                <>{selector}</>
            ) : (
                <>
                    <>{turnMessage}</>
                    <>{theGame}</>
                    <>{restart && (<>{restartButton}</>)}</>
                </>
            )
            }
        </>
    );
};

export default Game;
