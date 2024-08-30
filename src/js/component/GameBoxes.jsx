import React, { useState } from "react";

const GameBoxes = ({ paintIt, painted = false, icon = true }) => {

    let iconClass = ""

    switch (icon) {
        case true:
            iconClass = "fa-regular fa-circle fa-4x";
            break;
        case false:
            iconClass = "fa-solid fa-x fa-4x";
            break;
    }

    return (
        <div className="drawBox d-flex justify-content-center align-items-center" onClick={paintIt}>
            <i className={iconClass} style={{ opacity: painted ? 1 : 0 }}></i>
        </div>
    );
}

export default GameBoxes;