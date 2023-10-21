import "./Scoreboard.scss"

function Scoreboard({ score }) {
    return (
        <div className="scoreboard">
            <p>Current Score: {score}</p>
            <p>Best Score: </p>
        </div>
    );
}

export default Scoreboard;