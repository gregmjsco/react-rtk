import './App.scss'
import { useState, useEffect } from 'react';
import useFetchData from './components/useFetchData';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const kanjiURL = 'https://kanjiapi.dev/v1/kanji/grade-1';
  const { data, loading, error } = useFetchData(kanjiURL);
  const [score, setScore] = useState(0);


  if (loading) {
    return <div>Loading. . .</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
 
  const kanjiDataWithKey = data.map(kanji => ({
    ...kanji,
    character: kanji[0],
    id: uuidv4() 
  }));

  const shuffledData = shuffleArray([...kanjiDataWithKey])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function shuffleAndSetCards() {
    const shuffled = shuffleArray([...shuffledData]);
    setShuffledData(shuffled);
  }

  function handleClick() {
    setScore(score + 1);
        shuffledData.forEach(element => {
          element.id = uuidv4();
        });
        setShuffledData([...shuffledData])
      }
  

  return (
    <>
    <Scoreboard score={score} />
    <div className='card-container'>
    {shuffledData.map((kanji) => {
      <Card  key={kanji.id} kanji={kanji} onClick={handleClick} />
    }
      
  }</div>
    
    </>
  )
}

export default App
