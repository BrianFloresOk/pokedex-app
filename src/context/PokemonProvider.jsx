import { createContext, useState, useEffect } from "react";
import { dataUrlPokemon } from '../services/pokemon.services';

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

    

    useEffect(() => {
        allPokemons();
    }, []);

    const valuesData = {
        pokemons,
        loading,
        error,
        allPokemons,
    };

    return (
        <PokemonsContext.Provider value={valuesData}>
            {children}
        </PokemonsContext.Provider>
    );
};

export { PokemonsProvider };

export default PokemonsContext;
