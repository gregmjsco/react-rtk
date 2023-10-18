import './App.css'
import { useState, useEffect } from 'react';
import useFetchData from './components/useFetchData';
import Card from './components/Card';



function App() {

  const kanjiURL = 'https://kanjiapi.dev/v1/kanji/grade-1';
  const { data, loading, error } = useFetchData(kanjiURL);

  if (loading) {
    return <div>Loading. . .</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
 

  return (
    <div className='card-container'>
    {data.map((kanji, index) => (
      <Card  key={index} kanji={kanji} />
    ))}
      
    </div>
  )
}

export default App
