import '../styles/Pokemon.css'

//assets
import Bug from '../assets/TypesPokemon/bug.svg'
import Dark from '../assets/TypesPokemon/dark.svg'
import Dragon from '../assets/TypesPokemon/dragon.svg'
import Electric from '../assets/TypesPokemon/electric.svg'
import Fairy from '../assets/TypesPokemon/fairy.svg'
import Fighting from '../assets/TypesPokemon/fighting.svg'
import Fire from '../assets/TypesPokemon/fire.svg'
import Flying from '../assets/TypesPokemon/flying.svg'
import Ghost from '../assets/TypesPokemon/ghost.svg'
import Grass from '../assets/TypesPokemon/grass.svg'
import Ground from '../assets/TypesPokemon/ground.svg'
import Ice from '../assets/TypesPokemon/ice.svg'
import Normal from '../assets/TypesPokemon/normal.svg'
import Poison from '../assets/TypesPokemon/poison.svg'
import Psychic from '../assets/TypesPokemon/psychic.svg'
import Rock from '../assets/TypesPokemon/rock.svg'
import Steel from '../assets/TypesPokemon/steel.svg'
import Water from '../assets/TypesPokemon/water.svg'

const Pokemon = ({ id, name, type }) => {

  const selectBackground = () => {
    if (type[0] === 'bug') { return 'background-bug' }
    else if (type[0] === 'dark') { return 'background-dark' }
    else if (type[0] === 'dragon') { return 'background-dragon' }
    else if (type[0] === 'electric') { return 'background-electric' }
    else if (type[0] === 'fairy') { return 'background-fairy' }
    else if (type[0] === 'fighting') { return 'background-fighting' }
    else if (type[0] === 'fire') { return 'background-fire' }
    else if (type[0] === 'flying') { return 'background-flying' }
    else if (type[0] === 'ghost') { return 'background-ghost' }
    else if (type[0] === 'grass') { return 'background-grass' }
    else if (type[0] === 'ground') { return 'background-ground' }
    else if (type[0] === 'ice') { return 'background-ice' }
    else if (type[0] === 'normal') { return 'background-normal' }
    else if (type[0] === 'poison') { return 'background-poison' }
    else if (type[0] === 'psychic') { return 'background-psychic' }
    else if (type[0] === 'rock') { return 'background-rock' }
    else if (type[0] === 'steel') { return 'background-steel' }
    else { return 'background-water' }
  }

  const selectIcon = (type) => {
    if (type === 'bug') { return Bug }
    else if (type === 'dark') { return Dark }
    else if (type === 'dragon') { return Dragon }
    else if (type === 'electric') { return Electric }
    else if (type === 'fairy') { return Fairy }
    else if (type === 'fighting') { return Fighting }
    else if (type === 'fire') { return Fire }
    else if (type === 'flying') { return Flying }
    else if (type === 'ghost') { return Ghost }
    else if (type === 'grass') { return Grass }
    else if (type === 'ground') { return Ground }
    else if (type === 'ice') { return Ice }
    else if (type === 'normal') { return Normal }
    else if (type === 'poison') { return Poison }
    else if (type === 'psychic') { return Psychic }
    else if (type === 'rock') { return Rock }
    else if (type === 'steel') { return Steel }
    else { return Water }
  }

  return (
    <div className={'containerPokemon ' + selectBackground()}
    >
      <span className='id'>#{id}</span>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />
      <div className='bottomDiv'>
        <span className='name'>{name}</span>
        <div className='types'>
          {type.map((type,i) => (
            <img
              key={i}
              src={selectIcon(type)}
              alt={`type ${type}`}
              className='type'
            />
          ))}

        </div>

      </div>
    </div>
  )
}

export default Pokemon