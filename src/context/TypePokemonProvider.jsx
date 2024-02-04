import { createContext, useEffect, useState } from "react";
import { allTypesPokemon } from '../services/typesPokemon.services';

const TypePokemonsContext = createContext();

const TypePokemonsProvider = ({ children }) => {
    const [types, setTypes] = useState([]);
    const [error, setError] = useState(null);

    const allTypes = async () => {
        try {
            const data = await allTypesPokemon();
            console.log(data);
            setTypes(data);
        } catch (error) {
            setError("Ocurrió un error al cargar los Pokémon");
        }
    };

    useEffect(() => {
        allTypes();
    }, []);

    const valuesData = {
        types
    };

    return (
        <TypePokemonsContext.Provider value={valuesData}>
            {children}
        </TypePokemonsContext.Provider>
    );
};

export { TypePokemonsProvider };

export default TypePokemonsContext;
