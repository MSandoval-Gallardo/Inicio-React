import { useState } from "react";
import CounterButton from "./components/CounterButton"
import SharedButtom from "./components/SharedButtom"

const App = () => {

  // (inicio) para compartir valores en botones "SharedButtom"
  const [counter, setCounter] = useState(0);
  
      const handleClickIncrement = () => {
          const newValue = counter + 1;
          setCounter(newValue)
      }
  // (fin) para compartir valores en botones "SharedButtom"

  return (
    <div>
      <h1>Eventos</h1>
      {/* <MyButton/> */}
      <CounterButton/>
      <CounterButton/>

      {/* valores compartidos */}
      <SharedButtom 
      counter = {counter}
      handleClickIncrement = {handleClickIncrement}/>
      <SharedButtom
      counter = {counter}
      handleClickIncrement = {handleClickIncrement}/>


      </div>
  )
}
export default App