import { createContext, useEffect, useState } from "react";
import { allTypesPokemon, typesEnEspaniol } from '../services/typesPokemon.services';

const TypePokemonsContext = createContext();

const TypePokemonsProvider = ({ children }) => {
    const [types, setTypes] = useState([]);
    const [error, setError] = useState(null);
    const [tiposEsp, setTiposEsp] = useState([])

    const allTypes = async () => {
        try {
            const data = await allTypesPokemon();
            setTypes(data);
        } catch (error) {
            setError("Ocurrió un error al cargar los Pokémon");
        }
    };

    const allTypesEspaniol = async () => {
        function removerTildes(texto) {
            return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        try {
            const data = await typesEnEspaniol();
            const tipos = data.map(item => removerTildes(item))
            setTiposEsp(tipos);
        } catch (error) {
            setError("Ocurrió un error al cargar los Pokémon");
        }
    }

    useEffect(() => {
        allTypesEspaniol()
    }, [])

    const valuesData = {
        types,
        tiposEsp,
        allTypes,
        allTypesEspaniol
    };

    return (
        <TypePokemonsContext.Provider value={valuesData}>
            {children}
        </TypePokemonsContext.Provider>
    );
};

export { TypePokemonsProvider };

export default TypePokemonsContext;
