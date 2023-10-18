import React from "react";
import "./Card.css"

function Card({kanji}) {
    return (
        <div className="kanji-card">
            <p>{kanji}</p>
        </div>
    )
}

export default Card;