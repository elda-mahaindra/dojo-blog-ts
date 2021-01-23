// ---------------------------------------------- modules import
import { useEffect, useState } from "react";

// ---------------------------------------------- custom hooks
export const useFetch = <T>(url: string) => {
  // ---------------------------------------------- local state
  const [data, setData] = useState<T[] | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ---------------------------------------------- effects
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from that resource.");
          }

          return res.json();
        })
        .then((data) => {
          setData(data as T[]);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  // ---------------------------------------------- return value
  return { data, isPending, error };
};
