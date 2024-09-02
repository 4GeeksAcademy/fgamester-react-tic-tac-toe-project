import React from "react";

const Restart = ({ setRestart, setPlaying, setInMenu, setWinner, setCount }) => {

    const restart = () => {
        setPlaying(false)
        setWinner(false)
        setCount(0)
        setInMenu(true)
        // setKey(key + 1)
        setRestart(false)
    }

    return (
        <div className="text-center">
            <button onClick={() => restart()} className="btn btn-secondary fs-1">Play Again</button>
        </div>
    )
}

export default Restart