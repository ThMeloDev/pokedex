import '../styles/Search.css'
import SearchIcon from '../assets/search.svg'

const Search = () => {
  return (
    <div className='container'>
      <img src={SearchIcon} alt="Search icon" className='searchIcon' />
      <input type="text" className='searchInput' />
    </div>
  )
}

export default Search