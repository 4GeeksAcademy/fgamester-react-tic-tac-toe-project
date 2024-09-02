import React, { useEffect, useState } from "react"

const TurnMessage = ({ messageTurn = true }) => {


    const [turn, setTurn] = useState(true)

    useEffect(() => {
        setTurn(messageTurn)
    }, [messageTurn])

    return (
        <h1>It's {turn ? "O" : "X"} turn</h1>
    )

}

export default TurnMessage