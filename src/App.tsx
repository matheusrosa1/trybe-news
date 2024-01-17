import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NewsProvider from './context/NewsProvider'

function App() {

  return (
    <NewsProvider>
      <Header />
    </NewsProvider>
  )
}

export default App
