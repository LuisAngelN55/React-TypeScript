import { Counter } from "./componets/Counter";
import { TimerPadre } from "./componets/TimerPadre";
import { User } from "./componets/User";


function App() {
  return (
    <>
        <h1>React + TypeScript</h1>
        <hr />

        <h2>useState</h2>
        <Counter />
        <User />

        <h2>useEffect - useRef</h2>
        <hr />

        <TimerPadre />
    </>
  );
}

export default App;
