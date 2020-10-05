import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
// packages & libraires
import axios from 'axios'
// components
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const fetchItems = useCallback(async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    setItems(result.data)
    setIsLoading(false)
  }, [query])


  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return <div className="container">
    <Header />
    <Search getQuery={str => setQuery(str)} />
    <CharacterGrid items={items} isLoading={isLoading} />
  </div>
}

export default App;
