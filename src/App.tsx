import { useEffect, useState } from "react"

const App = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("el componente esta montado");
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count + 1)}>Incremento: {count}</button>
    </div>
  )
}
export default App