import React, { useState } from 'react'

const Die = () => {
  const [roll1, setRoll1] = useState(0)
  const [roll2, setRoll2] = useState(0)
 
  return (
    <>
      <div>
        <button>{roll1}</button>
        <button>{roll2}</button>
      </div>

      <button onClick={() => {
        setRoll1(Math.ceil((Math.random()) * 6))
        setRoll2(Math.ceil((Math.random()) * 6))
        }}>
        Roll
      </button>
    </>
  )
}

export default Die
