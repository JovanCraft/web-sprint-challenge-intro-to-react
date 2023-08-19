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
      {homeWorldShow && (
        <p>
          Homeworld: {character.homeworld.name}
        </p>
      )}
    </div>
  )
}

export default Character
