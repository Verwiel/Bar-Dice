import React from 'react'
import Die from '../../Components/Die'
import Dice from '../../Components/Dice'

export default () => {
  return (
    <>
      <header>
        <h1>Ace's</h1>
      </header>

      <Die />
      <Dice />

      <main>
        {/* Fixed top left*/}
        <section class='dice'>
          <p>Dice Roll</p>
        </section>

        {/* Fixed right, 100% height */}
        <section class='saved'>
          <p>How to Play</p>
          <p>Scores/Players</p>
          <p>New Game</p>
        </section>

        {/* Fixed bottom left */}
        <section class='info'>
          <p>Saved Dice</p>
        </section>
      </main>
    </>
  )
}