import React from "react";
import "./Card.scss"

function Card({ kanji, onClick }) {
    console.log(kanji)

    function handleClick() {
        onClick();
        alert('Clicked Card');  
    }

    return (
        <div className="kanji-card" onClick={handleClick}>
            <p>{kanji.character}</p>
        </div>
    )
}

export default Card;