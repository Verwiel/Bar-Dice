import React, { useState } from 'react';

export default () => {
  const [roll, setRoll] = useState(0);
  const numSides = 6
  
  return (
    <pre>
    Roll: {roll}
    <button onClick={() => setRoll(Math.ceil((Math.random()) * numSides))}>
    Click me</button>
    </pre>
  )
}