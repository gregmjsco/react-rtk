import React from "react";
import "./Card.scss"

function Card({ kanji }) {
    console.log(kanji)
    return (
        <div className="kanji-card">
            <p>{kanji.character}</p>
        </div>
    )
}

export default Card;