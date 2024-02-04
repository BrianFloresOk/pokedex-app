import { useContext } from "react";
import TypePokemonsContext from "../context/TypePokemonProvider";

export default function useTypesPokemon () {
    return useContext(TypePokemonsContext)
}