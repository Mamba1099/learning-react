import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(10);

  return(
    <div>
      <button onClick = {() => setCount(count + 1)}>+</button>
      <div>{count}</div>
    </div>

  )
}



export default App