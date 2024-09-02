import React, { useEffect, useState } from "react"

const TurnMessage = ({ gameTurn, winner }) => {

    const [message, setMessage] = useState("")

    useEffect(() => {
        if (winner) setMessage(< h1 className="text-center" > The winner is {!gameTurn ? "O" : "X"} </h1>)
        else setMessage(< h1 className="text-center" > It's {gameTurn ? "O" : "X"} turn </h1>)
    }, [gameTurn])

    return (

        <div>
            {message}
        </div>

    )

}

export default TurnMessage