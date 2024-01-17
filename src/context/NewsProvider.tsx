import useNewsApi from "../hooks/useNewsApi"
import NewsContext from "./NewsContext"

type NewsProviderProps = {
  children: React.ReactNode
}

function NewsProvider ({children} : NewsProviderProps) {
  const {news, error, loading} = useNewsApi();

  const value = {
    news,
    error,
    loading,
  }

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;