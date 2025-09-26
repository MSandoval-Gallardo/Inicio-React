import "./MyButton.css";

function MyButton(){
// inicio sin argumentos
  // const handelClick = () => {
  //   console.log("me diste")
  // }
  

  // return(
  //   <button 
  //   className="btn"
  //   onClick = {handelClick} // la funcion se llama sin parentesis para que no se ejecute al actualizar
  //   >Mi Boton</button>
  // )
  // fin sin argumento

  // inicio con argumemntos

   const handelClick = (message: string) => {
    console.log(message)
  }
  

  return(
    <button 
    className="btn"
    onClick = {() => handelClick("mensaje desde el boton")} //se debe crear una funcion anonima "() => para que no se ejecute al actualizar 
    >
      Mi Boton
    </button>
  )

}
export default MyButton

// tipos de handle (manejar)
//     handleClick — maneja cuando se hace clic.
//     handleChange — maneja cuando algo cambia.
//     handleSubmit — maneja cuando se envía un formulario.

