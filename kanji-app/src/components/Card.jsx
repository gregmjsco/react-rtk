import React from "react";
import "./Card.scss"

function Card({ kanji }) {
    console.log("Kanji: ", kanji)
    return (
        <div className="kanji-card">
            <p>{kanji.kanji}</p>
        </div>
    )
}

export default Card;