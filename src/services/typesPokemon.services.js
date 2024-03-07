import axios, { all } from 'axios'
import { dataUrlPokemon } from './pokemon.services'

const URL = "https://pokeapi.co/api/v2/type"

const allTypesPokemon = async () => {
    try {
        const {data} = await axios.get(URL)
        return data.results
    } catch (error) {
        console.log(error);
    }
}

const typesPokemons = async () => {
    try {
        const pokemons = await dataUrlPokemon()
        console.log(pokemons.types);
    } catch (error) {
        console.log(error.menssage);
    }
}

const getTypePokemon = async (namePokemon) => {
    try {
        const types = await allTypesPokemon()
        types.forEach(type => {
            return
        })

    } catch (error) {
        console.log(error);
    }
}

export { typesPokemons, allTypesPokemon }