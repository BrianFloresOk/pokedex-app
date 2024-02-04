import { Card } from "../Card"
import usePokemons from "../../hooks/usePokemons"


export function CardContainer() {
    const { pokemons, loading, error } = usePokemons();

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!pokemons || pokemons.length === 0) {
        return <div>No hay Pokémon disponibles.</div>;
    }

    return (
        <div className="d-flex justify-content-center flex-wrap gap-3">
            {
                pokemons.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon}/>
                ))
            }
        </div>
    )
}