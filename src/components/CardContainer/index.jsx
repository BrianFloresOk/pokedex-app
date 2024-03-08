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
        <div className="mb-10 pt-7">
            <h2 className="my-10 text-center font-bold text-2xl">Todos los pokémons</h2>
            <div className="flex justify-center flex-wrap gap-9 gap-y-12">
                {
                    pokemons.map((pokemon, index) => (
                        <Card key={index} pokemon={pokemon} />
                    ))
                }
            </div>
        </div>
    )
}