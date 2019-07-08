import React, { useState } from 'react'

const Die = () => {
  const [roll1, setRoll1] = useState(0)
  const [roll2, setRoll2] = useState(0)
  const [roll3, setRoll3] = useState(0)
  const [roll4, setRoll4] = useState(0)
  const [roll5, setRoll5] = useState(0)

  const [die1L, setDie1L] = useState(false)
  const [die2L, setDie2L] = useState(false)
  const [die3L, setDie3L] = useState(false)
  const [die4L, setDie4L] = useState(false)
  const [die5L, setDie5L] = useState(false)
 
  return (
    <>
      <div>
        <button onClick={() => setDie1L(true)}>{roll1}</button>
        <button onClick={() => setDie2L(true)}>{roll2}</button>
        <button onClick={() => setDie3L(true)}>{roll3}</button>
        <button onClick={() => setDie4L(true)}>{roll4}</button>
        <button onClick={() => setDie5L(true)}>{roll5}</button>
      </div>

      <button onClick={() => {
        if(die1L === false) setRoll1(Math.ceil((Math.random()) * 6));
        if(die2L === false) setRoll2(Math.ceil((Math.random()) * 6));
        if(die3L === false) setRoll3(Math.ceil((Math.random()) * 6));
        if(die4L === false) setRoll4(Math.ceil((Math.random()) * 6));
        if(die5L === false) setRoll5(Math.ceil((Math.random()) * 6));
        }}>
        Roll
      </button>
    </>
  )
}

export default Die
