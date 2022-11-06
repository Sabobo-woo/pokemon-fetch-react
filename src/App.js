import './App.css';
import { useState, useEffect } from 'react'
import Pokemon from './Pokemon';

function App() {

  const [pokemon, setPokemon] = useState(null);
  const [limit, setLimit] = useState(5);

  const loadData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=' + limit);
    const data = await response.json();
    setPokemon(data);
  }

  const plusFive = () => {
    setLimit(limit + 5);
    console.log(limit)
    loadData();
  }

  useEffect(() => {
    loadData()
  }, []);


  return (
    <div className="App">
      <button onClick={plusFive}>Five more!</button>
      {
        pokemon === null
          ? <p>loading...</p>
          : pokemon.results.map(pokelist => {
            return <Pokemon pokelist={pokelist} />
          })
      }
    </div>
  );
}

export default App;