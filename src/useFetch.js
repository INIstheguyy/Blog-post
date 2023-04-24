import { useState, useEffect } from "react";
import axios from "axios"; 

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const apiKey = "keyGWHUIYI77zD7jY";
        const headers = {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${apiKey}`,
        }
        const fetchData = async () => {
            try {
              const res = await axios.get(url, { headers});
              console.log(res.data)
              setData( res.data)
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