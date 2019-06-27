import React from 'react'

export default () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Dice Games</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/Aces">Aces</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/BarDice">Bar Dice</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ShipCaptainCrew">Ship, Captain, Crew</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ThreesLow">Threes Low</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ThreeMan">Three Man</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}