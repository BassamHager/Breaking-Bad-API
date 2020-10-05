import { useState } from 'react';

const AppState = () => {
    const [items, setItems] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    return { items, setItems, isLoading, setIsLoading, query, setQuery }
}

export default AppState
