import React from 'react'

export default () => {
  return (
    <>
      <header>
        <h1>Ship, Captain, Crew</h1>
      </header>
      
      <main>
        {/* Fixed top left*/}
        <section class=''>
          <p>Dice Roll</p>
        </section>

        {/* Fixed right, 100% height */}
        <section class=''>
          <p>Bid</p>
          <p>How to Play</p>
          <p>Scores/Players</p>
          <p>New Game</p>
        </section>

        {/* Fixed bottom left */}
        <section class=''>
          <p>Saved Dice</p>
        </section>
      </main>
    </>
  )
}