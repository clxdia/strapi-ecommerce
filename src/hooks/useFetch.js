import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setItems(res.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
