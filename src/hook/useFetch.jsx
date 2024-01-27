import React, { useEffect, useState } from "react";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData((prev) => {
          return {
            loading: false,
            data: data,
            error: null,
          };
        });
      } catch (e) {
        setData((prev) => {
          return {
            loading: false,
            data: null,
            error: e.message,
          };
        });
      }
    })();
  });
  return data;
};

export default useFetch;
