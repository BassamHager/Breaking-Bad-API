import React, { useContext } from 'react'
//context
import { AppContext } from '../../context/AppContext'
//components
import CharItem from './CharItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = () => {
    const { items, isLoading } = useContext(AppContext)

    return isLoading
        ? <Spinner />
        : <section className='cards'>
            {
                items.map(item => (<CharItem key={item.char_id} item={item} />))
            }
        </section>
}

export default CharacterGrid
