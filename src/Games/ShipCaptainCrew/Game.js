import React from 'react'

export default () => {
  return (
    <>
      <header>
        <h1>Ship, Captain, Crew</h1>
      </header>
      
      <main>
        {/* Fixed top left*/}
        <section>
          <p>Dice Roll</p>
        </section>

        {/* Fixed right, 100% height */}
        <section>
          <p>Bid</p>
          <p>How to Play</p>
          <p>Scores/Players</p>
          <p>New Game</p>
        </section>

        {/* Fixed bottom left */}
        <section>
          <p>Saved Dice</p>
        </section>
      </main>
    </>
  )
}