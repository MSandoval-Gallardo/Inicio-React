import { useState } from "react"
import Modal from "./components/Modal";

const App = () => {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="container mx-auto">
      <h1>useEffect</h1>
      <button 
      onClick={() => {
        setIsOpen(!isOpen)}}
      className="btn btn-primary">
        {
          isOpen ? "Cerrar" : "Abrir"

        }</button>
      {
        isOpen && <Modal/>
      }
    </div>
  )
}
export default App