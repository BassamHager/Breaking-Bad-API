import React, { createContext } from 'react'
// state component
import AppState from './AppState';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {

    const value = AppState()

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}