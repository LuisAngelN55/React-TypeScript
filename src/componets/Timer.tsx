import { useEffect, useRef, useState } from 'react';


type TimerArgs = {
  miliSeconds:  number,
  secodns?:      number
}

export const Timer = ( { miliSeconds }: TimerArgs ) => {

    const [seconds, setSeconds] = useState(0);
    const ref = useRef<NodeJS.Timeout>()
    
    useEffect( () => {
      ref.current && clearInterval( ref.current );
      ref.current = setInterval( () => setSeconds( state => state + 1 ) , miliSeconds);
      
    }, [miliSeconds])
    
    

  return (
    <>
        <h4>Timer: <small>{ seconds }</small></h4>
    </>
  )
}
