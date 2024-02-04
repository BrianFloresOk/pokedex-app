import axios from 'axios'


const URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemons = async () => {
    try {
        const { data } = await axios.get(URL)
        return data.results

    } catch (error) {
        console.log(error)
        throw new Error("Ocurrió un error: " + error.message);
    }
}

const getUrlPokemon = async () => {
    try {
        const pokemons = await getPokemons();
        const pokemonUrls = pokemons.map(pokemon => pokemon.url);
        return pokemonUrls
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error: " + error.message);
    }
};

const dataUrlPokemon = async () => {
    try {
        const urls = await getUrlPokemon();
        const dataPromises = urls.map(url => axios.get(url));
        const responses = await Promise.all(dataPromises);
        const data = responses.map(response => response.data);
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error: " + error.message);
    }
};



export { dataUrlPokemon }