import React, { useState } from 'react';

const Die = () => {
  const [roll, setRoll] = useState(0);
  const numSides = 6
  
  return (
    <div>
      <pre class="break">
        Roll: {roll}
      </pre>
      <button onClick={() => setRoll(Math.ceil((Math.random()) * numSides))}>
        Roll</button>
    </div>
  )
}

export default Die