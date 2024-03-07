import { useEffect, useState } from "react";
import { tipoPokemonEnEspaniol } from "../services/pokemon.services";

const usePokemonTipo = (pokemon) => {
    const [tipos, setTipos] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTipos = async () => {
            try {
                const tiposData = await tipoPokemonEnEspaniol(pokemon);
                setTipos(tiposData);
            } catch (error) {
                setError(error);
            }
        };

        fetchTipos();
    }, [pokemon]);

    return { tipos, error };
};

export default usePokemonTipo;
