import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const apiKey = "keyGWHUIYI77zD7jY";
        const fetchData = async () => {
            try {
              const res = await fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${apiKey}`,
                },
              });
              if (!res.ok) {
                throw Error('could not fetch blog');
              }
              const data = await res.json();
              console.log(data);
              setData(data);
              setIsPending(false);
              setError(null);
            } catch (err) {
                console.log(err)
              setError(err.message);
              setIsPending(false);
            }
          };
        fetchData();

    }, [url])

    return { data, isPending, error}
}
export default useFetch