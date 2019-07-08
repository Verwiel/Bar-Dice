import React from 'react'

export default () => {
  return (
    <>
      <header>
        <h1>Ace's</h1>
      </header>

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