import React, { useCallback, useState } from "react";
import GameBoxes from "./GameBoxes.jsx"

/* const cells = [null, null, null,
    null, null, null,
    null, null, null]; */

const Board = ({ gameTurn, setGameTurn, playing, setPlaying, winner, setWinner, count, setCount, setRestart }) => {

    const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null])

    const winnerCheck = () => {
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];
            if (cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c]) {
                setWinner(true)
                setPlaying(false)
                setRestart(true)
            }
        }
    }

    const settingCells = (index, newValue) => {
        const newCells = cells.map((cell, i) =>
            i === index ? newValue : cell
        );
        setCells(newCells);
    };

    const gameCheck = () => {
        if (!winner && count >= 9) {
            setPlaying(false)
            setRestart(true)
            console.log("no hay ganador")
        }
    }

    const handleClick = useCallback((index) => {
        if (cells[index] === null && playing) {
            settingCells(index, gameTurn)
            // cells[index] = gameTurn
            setCount(count + 1)
            winnerCheck()
            setGameTurn(!gameTurn)
            gameCheck()
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
