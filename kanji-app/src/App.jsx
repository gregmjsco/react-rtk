import './App.css'
import { useState, useEffect } from 'react';
import kanjiData from '../rtk_chapters/rtkChapter1.json';



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

  const [kanjiList, setKanjiList] = useState([]);

  useEffect(() => {
    // Assuming kanjiData is an object with a property 'kanjiList'
    if (kanjiData && kanjiData.kanjiList) {
      setKanjiList(kanjiData.kanjiList);
    }
  }, []);


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

    <div>
      <h1>Kanji List</h1>
      <ul>
        {kanjiList.map((kanji, index) => (
          <li key={index}>
            Kanji: {kanji.kanji}, Keyword: {kanji.keyword}
          </li>
        ))}
      </ul>
    </div>  
    </>
  )
}

export default App
