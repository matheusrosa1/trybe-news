import { useEffect, useState } from "react";

function useNewsApi() {
 const [news, setNews] = useState<any[]>([]);
 const [error, setError] = useState<string | null>(null);
 const [loading, setLoading] = useState<boolean>(true);

 useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const data = await response.json();
      setNews(data);
      setError(null);
    } catch (error) {
      setError('Erro ao buscar as notícias na API!');
    } finally {
      setLoading(false);
    }
  }
  fetchNews();
 }, [])
 return {news, error, loading}
}

export default useNewsApi;