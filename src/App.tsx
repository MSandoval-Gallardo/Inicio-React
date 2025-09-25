import MyButton from "./components/MyBoton";

const App = () => {

  const user = {

    username: "Miguel",
    email: "",
    imagen: "https://i.pravatar.cc/150?img=3",
    loggedIn: false
  }

  // destructuring de objetos 
  // para utilizar, se deben inicializar todas las variables del objeto user 
  const {username, email, imagen, loggedIn} = user

  if(!loggedIn){
    return <h1>El usuario no inicio sesion</h1>
  }
  return (
    <div>
      {/* (si existe 'username', muestra lo que sigue despues de '&&') */}
      {username && <h1>Hola: {username}</h1> }

      {/* (operador ternario (despues de '?' sigue lo positivo, despues de ':' sigue lo negativo)) */}
      {email ? <h2>{email}</h2> : <h2>usuario no tiene mail registrado</h2>}
      
      <img 
        src={imagen} 
        alt={`imagen-${username}`}
        width={100}
        style={{
          borderRadius: 100
        }}
      />
      <MyButton/>
    </div>
  )
}
export default App;


