import { FilterTipo } from "../FilterTipo"
import useTypesPokemon from "../../hooks/useTypesPokemon"

export const FilterContent = () => {

    const { tiposEsp } = useTypesPokemon()

    if (tiposEsp.length === 0) {
        return (
            <div>Cargando...</div>
        )
    }

    function removerTildes(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    console.log(tiposEsp[12]);
    console.log(removerTildes(tiposEsp[12]));

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-6 grid-rows-3 gap-4">
                {
                    tiposEsp.map((tipo, index) => (
                        <FilterTipo key={index} tipo={tipo} />
                    ))
                }
            </div>
        </div>
    )
}
