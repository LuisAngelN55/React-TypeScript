import { useState } from "react"
import { Timer } from "./Timer"


export const TimerPadre = () => {

  const [miliSecods, setMiliSecods] = useState(1000)

  return (
    <>
        <span>Milisegundos { miliSecods }</span>
        
        <br />

        <button className="btn btn-outline-success"
                onClick={ () => setMiliSecods(1000) }>
          1000
        </button>
        
        <button className="btn btn-outline-success"
                onClick={ () => setMiliSecods(2000) }>

          2000
        </button>
        
        <Timer miliSeconds={ miliSecods } />
    </>
  )
}
