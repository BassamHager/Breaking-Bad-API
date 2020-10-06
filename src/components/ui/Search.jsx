import React, { useContext } from 'react'
// context
import { AppContext } from '../../context/AppContext'

const Search = () => {
    const { query, setQuery } = useContext(AppContext)

    return (
        <section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search characters'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search