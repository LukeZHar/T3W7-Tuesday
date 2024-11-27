import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Lifestyle components
// componentDidMount() {} - Loads when ther website initially loads
// componentDidUpdate() {} - Loads when there is a change
// componentWillUnmount() {} - Loads when the component is collapsed

function App() {
  const [count, setCount] = useState(0)
  const [randomWord, setWord] = useState('abc')
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonImage, setPokemonImage] = useState("")

  const getPokemonData = async () => {
    setPokemonName(response.name);
    setPokemonImage(response.sprites.front_default);

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 1025)}`).then(response => response.json())
  }



  //  Works like componentDidMount()
  //  useEffect(callback, dependencyArray)
  // dependencyArray - whenever something changes here the useEffect hook runs
  useEffect(() => {
    console.log("Component Mounted")

    getPokemonData();

    // Works like componentWillUnmount()
    return (() => {
      console.log("Component will unmount now.")
    })
  }, [])

  useEffect(() => {
    console.log(`count: ${count}`)
  }, [count, randomWord])

  useEffect(() => {
    console.log(`Pokemon Data retrieved, Name: ${pokemonName}, Image: ${pokemonImage}`)
  }, [pokemonName, pokemonImage])


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
