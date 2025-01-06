import { useState } from "react";


function useCounter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return [count, increment]
}
function App() {

  const [count, increment] = useCounter()

  return (
    <div className="p-4">
      <div className="font-bold text-xl text-center">Best Pactice JS in REACT</div>

      <div className="p-4 flex">
        <button className="w-20 border-2 rounded-full bg-cyan-300" onClick={increment}>counting</button>
        <p className="px-2">Count : {count}</p>

      </div>
      <hr />
    </div>
  );
}

export default App;
