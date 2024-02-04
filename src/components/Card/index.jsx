import style from './styles.module.css'

export function Card({pokemon}) {

    const image = pokemon.sprites.other["official-artwork"].front_default
    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    function typePokemon() {
        if(pokemon.types.length > 1) {
            console.log(pokemon.name, pokemon.types);
        }
    }

    //typePokemon()

    return (
        <div className="card w-25 p-3">
            <img src={image} className={style.img__card} alt="pokemon" />
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h4 className="card-title">{capitalizedName}</h4>
                    <div>
                        <span className='badge bg-secondary'>Tipo 1</span>
                        <span className='badge bg-secondary'>Tipo 2</span>
                    </div>
                </div>
                <div className='row row-cols-2 mt-3'>
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