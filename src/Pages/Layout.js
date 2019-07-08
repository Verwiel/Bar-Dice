import React from 'react'
import Dice from '../../Components/Dice'

export default () => {
  return (
    <>
      <header>
        <h1>Title</h1>
      </header>

      <main>
        {/* Fixed top left*/}
        <section class=''>
          <p>Title</p>
          <p>Current Player</p>
          <p>Dice</p>
          <p>Rolls Left</p>
        </section>

        {/* Fixed bottom left */}
        <section class=''>
          <p>messages</p>
        </section>

        {/* Fixed right, 100% height */}
        <section class=''>
          <p>Scores/Players</p>
          <p>How to Play</p>
          <p>New Game</p>
        </section>
      </main>
    </>
  )
}