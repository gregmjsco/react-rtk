import React from "react";
import "./Card.css"

function Card({ kanji }) {
    console.log("Kanji: ", kanji)
    return (
        <div className="kanji-card">
            <p>{kanji.kanji[0]}</p>
        </div>
    )
}

export default Card;