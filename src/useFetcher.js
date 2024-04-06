import { useState, useEffect } from "react";
import axios from "axios";

const useFetcher = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel ongoing requests when the component unmounts
    return () => {
      // Cancel ongoing requests
    };
  }, [url]); // Re-run effect when the URL changes

  return { data, loading, error };
};

export default useFetcher;
