import { useState } from "react"

const CounterButton = () => {
    const [counter, setCounter] = useState(0);

    const handleClickIncrement = () => {
        const newValue = counter + 1;
        setCounter(newValue)
    }
  return (
    <button onClick={handleClickIncrement}>{counter}</button>
  )
}
export default CounterButton