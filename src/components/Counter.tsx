import { useState } from "react"

export const Counter = () => {
  
  const [counter, setCounter] = useState<number>(0);

  const increment = ( numero:number = 1 ):void => {
    setCounter( counter + numero );
  }

  return (
    <div className="mt-4">
      <h3>Counter: useState</h3>
      <span>Value: { counter }</span>
      <br />
      <button
        onClick={ () => increment() }
        className="btn btn-primary mt-2 mr-2"
      >
        +1
      </button>
      <button
        onClick={ () => increment(2) }
        className="btn btn-primary mt-2 mr-2"
      >
        +2
      </button>
      <button
        onClick={ () => setCounter(0) }
        className="btn btn-danger mt-2 mr-2"
      >
        Reset
      </button>
    </div>
  )
}
