import React from 'react'
//components
import CharItem from './CharItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => isLoading ? <Spinner /> : <section className='cards'>{
    items.map(item => (<CharItem key={item.char_id} item={item} />))
}</section>

export default CharacterGrid
