import React, { createContext } from 'react'
// state component
import AppState from './AppState';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const { items, setItems, isLoading, setIsLoading, query, setQuery } = AppState()

    const value = { items, setItems, isLoading, setIsLoading, query, setQuery }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}