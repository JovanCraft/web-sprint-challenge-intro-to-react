import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API

  // ❗ Create effects to fetch the data and put it in state

  const combineData = (characters, homeworlds) => {
    return characters.map(character => {
      const homeworld = homeworlds.find(world => world.id === character.homeworld)
      return {
        ...character,
        homeworld
      }
    })
  }
  const [combinedData, setCombinedData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterResponse = await axios.get('http://localhost:9009/api/people');
        const homeworldResponse = await axios.get('http://localhost:9009/api/planets');

        const characters = characterResponse.data;
        const homeworlds = homeworldResponse.data;

        const combinedData = combineData(characters, homeworlds);
        setCombinedData(combinedData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData()
  }, [])
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
        combinedData.map(character => (
          <Character key={character.id} character={character}/>
        ))
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
