import React, { useState, useEffect } from "react";

const useFetchData = (url: string): [boolean, any] => {
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState<any>({});

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTimeout(() => {
          setOutput(data);
          setIsLoading(false);
        }, 1500);
      } catch (err) {
        setOutput({});
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return [isLoading, output];
};

export default useFetchData;
