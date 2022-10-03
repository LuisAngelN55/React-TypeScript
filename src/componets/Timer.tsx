import { useEffect, useState } from 'react';


export const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    
    useEffect( () => {
      
      setInterval( () => setSeconds( state => state + 1 ) , 1000);
    }, [])
    
    

  return (
    <>
        <h4>Timer: <small>{ seconds }</small></h4>
    </>
  )
}
