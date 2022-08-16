import '../styles/Search.css'
import SearchIcon from '../assets/search.svg'

import { useState } from 'react'

const [ searchPokemon, setSearchPokemon] = useState()

const Search = () => {
  return (
    <div className='container'>
      <img src={SearchIcon} alt="Search icon" className='searchIcon' />
      <input type="text" className='searchInput' onChange={setSearch} />
    </div>
  )
}

export default Search