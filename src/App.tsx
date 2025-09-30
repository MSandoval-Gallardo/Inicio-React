import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {

  const [todo, setTodo] = useState<Todo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos/10000000")
    .then((res) => {
      if(res.ok) return res.json();
        console.log("Algo salió mal");
        throw new Error("404 en la API");
    })
    .then((data: Todo) => {
      console.log(data)
      setTodo(data)
      
    })
    .catch((e: unknown) => {
      if(e instanceof Error){
       return setError(e.message)
      }
      console.log(e);
      setError("error mas grave...")
    })
    .finally(() => {
      setIsLoading(false)
    });
  }, [])

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>{error}</p>
  return (
    <div>
      <h1>Fetch</h1>
      <h4>Id {todo?.id}</h4>
      <h2>Titulo {todo?.title}</h2>
      <h3>Estado {todo?.completed ? "Tarea completada" : "Tarea no completada"}</h3>
    </div>
  )
}
export default App