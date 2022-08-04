//Style
import './styles/App.css';

//Assets
import PokemonTitle from './assets/pokemon_title.png'
import Arrow from './assets/arrow.svg'

//Components
import Search from './components/Search';
import TypeChoose from './components/TypeChoose';


function App() {
  return (
    <div className="App">
      <img src={PokemonTitle} alt='Título Pokemon' className='pokemonTitle' />
      <h1 className='pokemonChoose'>choose your pokemon</h1>
      <Search />
      <div className='typeChoose'>
        <img src={Arrow} alt="Arrow" className='arrow arrowLeft' />
        <TypeChoose />
        <TypeChoose />
        <TypeChoose />
        <TypeChoose />
        <img src={Arrow} alt="Arrow" className='arrow' />
      </div>
    </div>
  );
}

export default App;
