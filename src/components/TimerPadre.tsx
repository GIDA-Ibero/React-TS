import { useState } from 'react';
import { TimerHijo } from './TimerHijo';

export const TimerPadre = () => {
  const [milliseconds, setMilliseconds] = useState(1000);
  return (
    <>
      <h4>Milliseconds <small>{ milliseconds }</small></h4>
      <button
        onClick={ () => setMilliseconds(1000) }
        className="btn btn-warning mr-2"
      >
        1000
      </button>
      <button
        onClick={ () => setMilliseconds(2000) }
        className="btn btn-warning"
      >
        2000
      </button>
      <TimerHijo milliseconds={ milliseconds } />
    </>
  )
}
