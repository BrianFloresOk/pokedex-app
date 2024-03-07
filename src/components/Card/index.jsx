import usePokemonTipo from '../../hooks/usePokemonTipo';
import { Tipo } from './Tipo';
import style from './styles.module.css'

export function Card({ pokemon }) {

    const { tipos: { tipo1, tipo2 } } = usePokemonTipo(pokemon)

    const image = pokemon.sprites.other["official-artwork"].front_default
    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    if (tipo1 === undefined || tipo2 === undefined) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="w-1/4 p-3 shadow-md">
            <div className='p-2 h-44'>
                <img src={image} className={style.img__card} alt="pokemon" />
            </div>
            <div className="">
                <div className='flex justify-between'>
                    <h4 className="font-mono font-semibold text-lg">{capitalizedName}</h4>
                    <Tipo 
                        tipo1={tipo1}
                        tipo2={tipo2}
                    />
                </div>
            </div>
        </div>
    )
}