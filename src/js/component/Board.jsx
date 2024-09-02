import React, { useCallback, useState } from "react";
import GameBoxes from "./GameBoxes.jsx"

/* const cells = [null, null, null,
    null, null, null,
    null, null, null]; */

const Board = ({ gameTurn, setGameTurn, playing, setPlaying, winner, setWinner, count, setCount, setRestart }) => {

    const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null])

    const winnerCheck = (cells) => {
        const winnerLines = [
            [0, 1, 2],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
        ];
        for (let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];
            if (cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c]) {
                setWinner(true)
                setPlaying(false)
                setRestart(true)
                break;
            }
        }
    }

    const settingCells = (i, value) => {
        let updateCells = [...cells]
        updateCells[i] = value;
        setCells(updateCells)
    };

    const gameCheck = (winner, count) => {
        if (!winner && count == 8) {
            setPlaying(false)
            setRestart(true)
        }
    }

    const handleClick = (index, cells, winner, count) => {
        if (cells[index] === null && playing) {
            // settingCells(index, gameTurn)
            // cells[index] = gameTurn
            let updateCells = [...cells]
            updateCells[index] = gameTurn;
            setCells(updateCells)
            //
            setCount(count + 1)
            winnerCheck(updateCells)
            setGameTurn(!gameTurn)
            gameCheck(winner, count)
        }
    };

    return (
        <div className="d-flex flex-column align-items-center m-2">
            <div className="d-flex">
                <GameBoxes paintIt={() => handleClick(0, cells, winner, count)} painted={cells[0] !== null} icon={cells[0]} />
                <GameBoxes paintIt={() => handleClick(1, cells, winner, count)} painted={cells[1] !== null} icon={cells[1]} />
                <GameBoxes paintIt={() => handleClick(2, cells, winner, count)} painted={cells[2] !== null} icon={cells[2]} />
            </div>
            <div className="d-flex">
                <GameBoxes paintIt={() => handleClick(3, cells, winner, count)} painted={cells[3] !== null} icon={cells[3]} />
                <GameBoxes paintIt={() => handleClick(4, cells, winner, count)} painted={cells[4] !== null} icon={cells[4]} />
                <GameBoxes paintIt={() => handleClick(5, cells, winner, count)} painted={cells[5] !== null} icon={cells[5]} />
            </div>
            <div className="d-flex">
                <GameBoxes paintIt={() => handleClick(6, cells, winner, count)} painted={cells[6] !== null} icon={cells[6]} />
                <GameBoxes paintIt={() => handleClick(7, cells, winner, count)} painted={cells[7] !== null} icon={cells[7]} />
                <GameBoxes paintIt={() => handleClick(8, cells, winner, count)} painted={cells[8] !== null} icon={cells[8]} />
            </div>
        </div>
    );
};

export default Board;
