import "./Scoreboard.scss"

function Scoreboard({ score, bestScore }) {
    return (
        <div className="scoreboard">
            <p>Current Score: {score}</p>
            <p>Best Score:{bestScore} </p>
        </div>
    );
}

export default Scoreboard;