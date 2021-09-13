import { useEffect, useState, useCallback } from 'react';

export const useFetch = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = useCallback(async () => {
    const resquest = await fetch('https://kapital.kz/api/materials', {
      headers: {
        Accept: 'application/json',
      },
    });
    const { data } = await resquest.json();
    setArticles(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { articles };
};
