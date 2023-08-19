import React, { useState } from 'react'

function Character({ character }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not

  const [homeWorldShow, setHomeWorldShow] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggle = () => {
    setHomeWorldShow(!homeWorldShow)
  }
  return (
    <div className='character-card' onClick={toggle}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{character.name}</h3>

      {homeWorldShow && (
        <p>
          Planet: {character.homeworld.name}<br />
          ID: {character.id}<br />
          Birth Year: {character.birth_year}<br />
          Eye Color: {character.eye_color}<br />
          Gender: {character.gender}<br />
          Hair Color: {character.hair_color}<br />
          Height: {character.height}<br />
          Mass: {character.mass}<br />
          Skin Color: {character.skin_color}<br />
        </p>
      )}
    </div>
  )
}

export default Character
