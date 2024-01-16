import NewsContext from "./NewsContext"

type NewsProviderProps = {
  children: React.ReactNode
}

function NewsProvider ({children} : NewsProviderProps) {

  const value = {}

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;