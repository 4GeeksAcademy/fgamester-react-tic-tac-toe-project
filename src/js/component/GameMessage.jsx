import React, { useEffect, useState } from "react"

const GameMessage = ({ gameTurn, winner, count }) => {

    const [message, setMessage] = useState("")

    useEffect(() => {
        if (winner) setMessage(< h1 className="text-center" > The winner is {!gameTurn ? "O" : "X"} </h1>)
        else if (!winner && count == 9) setMessage(< h1 className="text-center" > There is no winner this time </h1>)
        else setMessage(< h1 className="text-center" > It's {gameTurn ? "O" : "X"} turn </h1>)
    }, [gameTurn])

    return (

        <div>
            {message}
        </div>

    )

}

export default GameMessage