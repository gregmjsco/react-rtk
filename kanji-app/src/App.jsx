import './App.css'

const { Kanjiapi } = require('kanjiapi-wrapper')

const Kanji = ({ kanji }) =>
    kanji.status === Kanjiapi.SUCCESS ?
        <ul>
            {kanji.value.meanings.map(meaning =>
                <li key={meaning}>{meaning}</li>)}
        </ul> :
        kanji.status === Kanjiapi.LOADING ?
        <div>Loading</div> :
        <div>Error</div>

const App = ({ kanjiapi }) => {
    const [timestamp, setTimestamp] = React.useState(Date.now())
    kanjiapi.addListener('appState', () => setTimestamp(Date.now()))

    const [character, setCharacter] = React.useState('字')

    return <>
        <input
            type="text"
            value={character}
            onChange={e => setCharacter(e.target.value)}/>
        <Kanji kanji={kanjiapi.getKanji(character)}/>
    </>
}

this.kanjiapi = Kanjiapi.build()
ReactDOM.render(<App kanjiapi={kanjiapi}/>, document.getElementById('app'))
