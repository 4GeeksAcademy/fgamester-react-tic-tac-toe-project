import React from "react";

const TurnSelector = ({ setGameTurn, setInMenu, setPlaying }) => {

    const startGame = (turn) => {
        setGameTurn(turn)
        setInMenu(false)
        setPlaying(true)
    }

    return (
        <div className="text-center">
            <h1>Who wanna start the game?</h1>
            <div>
                <button className="btn btn-secondary m-1 fs-1" onClick={() => startGame(true)} > O </button>
                <button className="btn btn-secondary m-1 fs-1" onClick={() => startGame(false)} > X </button>
            </div>
        </div>
    )

}

export default TurnSelector;