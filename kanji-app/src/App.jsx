import './App.css'

fetch('https://kanjiapi.dev/v1/kanji/heisig')
  .then(function(response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  })

function App() {

  return (
    <>
      <h1>React Kanji app</h1>
    </>
  )
}

export default App
