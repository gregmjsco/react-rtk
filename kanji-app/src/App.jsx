import './App.css'
import { useState, useEffect } from 'react';
import kanjiData from '../rtk_chapters/rtkChapter1.json';
import Card from './components/Card';



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
      <Card />
    </>
  )
}

export default App
