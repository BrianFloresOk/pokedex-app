import { useContext } from "react";
import PokemonsContext from "../context/PokemonProvider";

export default function usePokemons () {
    return useContext(PokemonsContext)
}