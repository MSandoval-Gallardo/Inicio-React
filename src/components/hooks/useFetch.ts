import { useEffect, useState } from "react";


export const useFetch = <T>(url: string) => {

const [data, setData] = useState<T | null>(null)
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchData = async () => {
    try {
      const res = await fetch(url)
      if(!res.ok) throw new Error("404 en la API");
      const data = (await res.json()) as T;
      setData(data)
      } catch (e: unknown) {
        if(e instanceof Error){
        return setError(e.message)
        }
        console.log(e);
        setError("error mas grave...")
      } finally{
        setIsLoading(false)
      }
      
    }
    fetchData()
  }, [url]);


    return {data, isLoading, error};
}