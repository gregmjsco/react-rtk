import React from "react";
import "./Card.scss"

function Card({ kanji, onClick }) {
    console.log(kanji)

    function handleClick() {
        onClick();
    }

    return (
        <div className="kanji-card" onClick={handleClick}>
            <p>{kanji.character}</p>
        </div>
    )
}

export default Card;