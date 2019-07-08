import React, { useState } from 'react'

const Die = () => {
  const [roll1, setRoll1] = useState(0)
  const [roll2, setRoll2] = useState(0)
  const [roll3, setRoll3] = useState(0)
  const [roll4, setRoll4] = useState(0)
  const [roll5, setRoll5] = useState(0)
 
  return (
    <>
      <div>
        <button>{roll1}</button>
        <button>{roll2}</button>
        <button>{roll3}</button>
        <button>{roll4}</button>
        <button>{roll5}</button>
      </div>

      <button onClick={() => {
        setRoll1(Math.ceil((Math.random()) * 6))
        setRoll2(Math.ceil((Math.random()) * 6))
        setRoll3(Math.ceil((Math.random()) * 6))
        setRoll4(Math.ceil((Math.random()) * 6))
        setRoll5(Math.ceil((Math.random()) * 6))
        }}>
        Roll
      </button>
    </>
  )
}

export default Die
