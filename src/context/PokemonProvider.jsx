import { createContext, useState, useEffect } from "react";
import { dataUrlPokemon } from '../services/pokemon.services';
import { filterTypes } from "../services/typesPokemon.services";

const PokemonsContext = createContext();

const PokemonsProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const allPokemons = async () => {
        try {
            const data = await dataUrlPokemon();
            setPokemons(data);
            setLoading(false);
        } catch (error) {
            setError("Ocurrió un error al cargar los Pokémon");
            setLoading(false);
        }
    };

    const filteredPokeForType = async (tipo) => {
        try {
            
            const data = await filterTypes(tipo)
            console.log(data);
        } catch (error) {
            setError("Ocurrió un error al cargar los Pokémon");
        }
    }

    useEffect(() => {
        allPokemons();
    }, []);

    const valuesData = {
        pokemons,
        loading,
        error,
        allPokemons,
        filteredPokeForType
    };

    return (
        <PokemonsContext.Provider value={valuesData}>
            {children}
        </PokemonsContext.Provider>
    );
};

export { PokemonsProvider };

export default PokemonsContext;
