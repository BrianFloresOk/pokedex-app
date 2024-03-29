import axios from 'axios'
import { dataUrlPokemon } from './pokemon.services'

const URL = "https://pokeapi.co/api/v2/type"

const allTypesPokemon = async () => {
    try {
        const { data } = await axios.get(URL)
        return data.results
    } catch (error) {
        console.log(error);
    }
}

const filterTypes = async (tipo1) => {
    try {
        const { data } = await axios.get(URL + "/" + tipo1)
        return data

    } catch (error) {
        console.log(error);
    }
}

const typesEnEspaniol = async () => {

    try {
        const datos = await allTypesPokemon()

        const data = datos.map(dato => axios.get(dato.url));
        const response = await Promise.all(data);
        const tiposEspaniol = response.map(res => res.data.names[5].name)
        return tiposEspaniol.slice(0, -2)

    } catch (error) {
        console.log(error.menssage);
    }
}

export { filterTypes, allTypesPokemon, typesEnEspaniol }