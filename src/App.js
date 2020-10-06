import React, { useEffect, useCallback, useContext } from 'react';
import './App.css';
// packages & libraires
import axios from 'axios'
// context
import { AppContext } from './context/AppContext';
// components
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {
  const { setItems, setIsLoading, query } = useContext(AppContext)

  const fetchItems = useCallback(async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    setItems(result.data)
    setIsLoading(false)
  }, [query, setIsLoading, setItems])


  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return (
    <div className="container">
      <Header />
      <Search />
      <CharacterGrid />
    </div>
  )
}

export default App;
