import './App.scss'
import { useState, useEffect } from 'react';
import useFetchData from './components/useFetchData';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const kanjiURL = 'https://kanjiapi.dev/v1/kanji/grade-1';
  const { data, loading, error } = useFetchData(kanjiURL);

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

  return (
    <>
    <Scoreboard />
    <div className='card-container'>
    {kanjiDataWithKey.map((kanji) => (
      <Card  key={kanji.id} kanji={kanji} />
    ))}
      
    </div>
    
    </>
  )
}

export default App
