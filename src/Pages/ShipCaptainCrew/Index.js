import React from 'react'
import Game from './Game'

export default () => {
  return (
    <>
      <header>
        <h1>Ship, Captain, Crew</h1>
      </header>
      
      <main>
        {/* Fixed top left*/}
        <section class='dice'>
          <Game />
        </section>

        {/* Fixed right, 100% height */}
        <section class='saved'>
          <p>How to Play</p>
          <p>Scores/Players</p>
          <p>New Game</p>
        </section>

        {/* Fixed bottom left */}
        <section class='info'>
          <p>messages</p>
        </section>
      </main>
    </>
  )
}
// only allow 3 dice to be locked