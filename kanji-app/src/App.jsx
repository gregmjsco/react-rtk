import './App.scss';
import { useState, useEffect } from 'react';
import useFetchData from './components/useFetchData';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const kanjiURL = 'https://kanjiapi.dev/v1/kanji/grade-1';
  const { data, loading, error } = useFetchData(kanjiURL);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      const kanjiDataWithKey = data.map(kanji => ({
        ...kanji,
        character: kanji[0],
        id: uuidv4(),
      }));
      setShuffledData(shuffleArray([...kanjiDataWithKey]));
    }
  }, [data, loading, error]);

  //Shuffle using Fisher-Yates Modern Shuffle Algorithm
  function shuffleArray(array) {
    /*Goes from end of array generating a random number
    between 0 and the current element. Swapping the corresponding
    elements and then moving down the array
    */
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(kanji) {
    //If the card has already been clicked reset and check for best score
    if (clickedCards.has(kanji.id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedCards(new Set());
      setShuffledData(shuffleArray([...shuffledData]));
    } else {
      //Update the Set and increase the score and reshuffle
      const updatedClickedCards = new Set(clickedCards);
      updatedClickedCards.add(kanji.id);
      setClickedCards(updatedClickedCards);
      setScore(score + 1);
      setShuffledData(shuffleArray([...shuffledData]));
    }
  }

  return (
    <>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="card-container">
        {shuffledData.map((kanji) => (
          <Card key={kanji.id} kanji={kanji} onClick={() => handleClick(kanji)} />
        ))}
      </div>
    </>
  );
}

export default App;
