import React, { useEffect, useState } from "react";

export default function useFetch(url, params) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url, params);
        const allData = await response.json();
        setData(allData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [url]);
  return { data, loading, error };
}
