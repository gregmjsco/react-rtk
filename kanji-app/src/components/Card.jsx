import React from "react";

function Card({data}) {
    {console.log(data)}
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Card;