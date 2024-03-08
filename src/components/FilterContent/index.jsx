import { FilterTipo } from "../FilterTipo"
import useTypesPokemon from "../../hooks/useTypesPokemon"

export const FilterContent = () => {

    const { tiposEsp } = useTypesPokemon()
    
    const handleClick = () => {
        
    }

    if (tiposEsp.length === 0) {
        return (
            <div>Cargando...</div>
        )
    }

    

    return (
        <div className="flex justify-center mt-10">
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
