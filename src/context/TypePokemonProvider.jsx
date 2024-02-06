import { createContext, useEffect, useState } from "react";
import { allTypesPokemon } from '../services/typesPokemon.services';

const TypePokemonsContext = createContext();

const TypePokemonsProvider = ({ children }) => {
    const [types, setTypes] = useState([]);
    const [error, setError] = useState(null);

    const allTypes = async () => {
        try {
            const data = await allTypesPokemon();
            setTypes(data);
        } catch (error) {
            setError("Ocurrió un error al cargar los Pokémon");
        }
    };

    const valuesData = {
        types,
        allTypes
    };

    return (
        <TypePokemonsContext.Provider value={valuesData}>
            {children}
        </TypePokemonsContext.Provider>
    );
};

export { TypePokemonsProvider };

export default TypePokemonsContext;
