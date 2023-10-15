import './App.css'
import { useState, useEffect } from 'react';




function App() {

const [items, setItems] = useState([]);
const [kanji, setKanji] = useState([]);
const [mode, setMode] = useState('');

useEffect(() => {

  fetch('https://kanjiapi.dev/v1/kanji/grade-1')
    .then(function(response) {
      return response.json();
    })
    .then(function (response) {
      setItems(response);
      console.log(response)
    })
}, [])


  return (
    <>
      <h1>React Kanji app</h1>
      <button onClick={() => setMode('Memory Game')}>Memory Game</button>
      {items.map( item => {
        fetch(`https://kanjiapi.dev/v1/kanji/${item}`)
        .then(function (response) {
          return response.json();
        })
        .then(function(response) {
          console.log(response);
          setKanji(response);
        })
        return <pre>{JSON.stringify(item)}</pre>
        
      })}
    </>
  )
}

export default App
