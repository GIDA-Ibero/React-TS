import { useRef } from 'react';
import { useEffect, useState } from 'react';

type TimeArgs = {
  milliseconds: number;
  secondsArg?: number;
}

export const TimerHijo = ( { milliseconds }:TimeArgs ) => {
  
  const [seconds, setSeconds] = useState(0)

  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval( ref.current );
    ref.current = setInterval(() => setSeconds((seg) => seg + 1 ), milliseconds);
  }, [milliseconds])

  return (
    <h4 className="mt-2">Timer: <small>{ seconds }</small></h4>
  )
}
