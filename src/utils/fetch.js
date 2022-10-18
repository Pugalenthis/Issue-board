import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch(`url`)
        .then((data) => data.json())
        .then((res) => setData(res))
        .catch((err) => setError(err));
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
