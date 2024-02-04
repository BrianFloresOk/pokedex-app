import style from './styles.module.css'

export function Card({ pokemon }) {

    const image = pokemon.sprites.other["official-artwork"].front_default
    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    function typePokemon() {
        if (pokemon.types.length > 1) {
            console.log(pokemon.name, pokemon.types);
        }
    }

    return (
        <div className="w-1/4 p-3 shadow-md">
            <div className='p-2 h-44'>
                <img src={image} className={style.img__card} alt="pokemon" />
            </div>
            <div className="">
                <div className='flex justify-between'>
                    <h4 className="font-mono font-semibold text-lg">{capitalizedName}</h4>
                    <div>
                        <span className='font-mono text-sm p-1 bg-slate-500 rounded-md'>Tipo 1</span>
                        <span className='font-mono text-sm p-1 bg-slate-500 rounded-md'>Tipo 2</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-3 h-24'>
                    <div>
                        <p className="text-center m-0">Ataque 1</p>
                        <p className="text-center m-0">Ataque 2</p>
                    </div>
                    <div>
                        <p className="text-center m-0">Ataque 3</p>
                        <p className="text-center m-0">Ataque 4</p>
                    </div>
                </div>
            </div>
        </div>
    )
}