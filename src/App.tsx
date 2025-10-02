import { useFetch } from "./components/hooks/useFetch";


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// fetch("https://jsonplaceholder.typicode.com/todos/10000000")
//     .then((res) => {
//       if(res.ok) return res.json();
//         console.log("Algo salió mal");
//         throw new Error("404 en la API");
//     })
//     .then((data: Todo) => {
//       console.log(data)
//       setTodo(data)
      
//     })
//     .catch((e: unknown) => {
//       if(e instanceof Error){
//        return setError(e.message)
//       }
//       console.log(e);
//       setError("error mas grave...")
//     })
//     .finally(() => {
//       setIsLoading(false)
//     });
//   }, [])

const App = () => {

  const {data: todo, isLoading, error} = useFetch<Todo>("https://jsonplaceholder.typicode.com/todos/4")

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>{error}</p>
  return (
    <div>
      <h1>Fetch</h1>
      <h4>Id {todo?.id}</h4>
      <h2>Titulo {todo?.title}</h2>
      <h3>Estado {todo?.completed ? "Tarea completada" : "Tarea no completada"}</h3>
      
      {/* opcion para iterar en desarrollo */}
      {/* lo que queremos iterar // para formatear // identacion  (sin el null y el 2, queda todo en una linea)*/}
      <pre>{JSON.stringify(todo, null, 2)}</pre> 
    </div>
  )
}
export default App