import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(responce => {
                setData(responce)
                setError(null)
                setIsPending(false)
            })
            .catch(err =>{
                setError(err.message);
                setIsPending(false)
            })

    }, [url]);
    return {data, isPending, error}
}
 
export default useFetch;