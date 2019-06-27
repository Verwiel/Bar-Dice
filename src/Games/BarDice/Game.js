import React from 'react'

export default () => {
  return (
    <>
      <header>
        <h1>Bar Dice</h1>
      </header>
      
      <main>
        {/* Fixed top left*/}
        <section>
          <p>Dice Roll</p>
        </section>

        {/* Fixed right, 100% height */}
        <section>
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