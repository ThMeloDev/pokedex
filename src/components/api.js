const SearchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

export default SearchPokemon