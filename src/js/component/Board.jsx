import React, { useState, useCallback } from "react";
import GameBoxes from "./GameBoxes.jsx"

const cells = [null, null, null,
    null, null, null,
    null, null, null];

const Board = ({ playMode = true, setGameTurn }) => {
    const [turn, setTurn] = useState(true)

    const handleClick = useCallback((index) => {
        if (cells[index] === null && playMode) {
            cells[index] = turn
            setTurn(!turn)
            setGameTurn(!turn)
        }
    });

    return (
        <div className="d-flex flex-column align-items-center m-2">
            <div className="d-flex">
                <GameBoxes paintIt={() => handleClick(0)} painted={cells[0] !== null} icon={cells[0]} />
                <GameBoxes paintIt={() => handleClick(1)} painted={cells[1] !== null} icon={cells[1]} />
                <GameBoxes paintIt={() => handleClick(2)} painted={cells[2] !== null} icon={cells[2]} />
            </div>
            <div className="d-flex">
                <GameBoxes paintIt={() => handleClick(3)} painted={cells[3] !== null} icon={cells[3]} />
                <GameBoxes paintIt={() => handleClick(4)} painted={cells[4] !== null} icon={cells[4]} />
                <GameBoxes paintIt={() => handleClick(5)} painted={cells[5] !== null} icon={cells[5]} />
            </div>
            <div className="d-flex">
                <GameBoxes paintIt={() => handleClick(6)} painted={cells[6] !== null} icon={cells[6]} />
                <GameBoxes paintIt={() => handleClick(7)} painted={cells[7] !== null} icon={cells[7]} />
                <GameBoxes paintIt={() => handleClick(8)} painted={cells[8] !== null} icon={cells[8]} />
            </div>
        </div>
    );
};

export default Board;
