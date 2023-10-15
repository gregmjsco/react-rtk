import './App.css'
import { useState, useEffect } from 'react';




function App() {

const [items, setItems] = useState([]);
const [mode, setMode] = useState('');

useEffect(() => {

  fetch('https://kanjiapi.dev/v1/kanji/heisig')
    .then(function(response) {
      return response.json();
    })
    .then(function (response) {
      setItems(response);
    })
})


  return (
    <>
      <h1>React Kanji app</h1>
      <button onClick={() => setMode('Memory Game')}>Memory Game</button>
      {items.map( item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App
