import style from './styles.module.css'
import pokedex from '../../assets/pokedex.png'

export function Header() {
    return(
        <header className={style.header}>
            <div className={style.title__container}>
                <div className='w-1/5 h-3/6'>
                    <img src={pokedex} alt="pokedex"/>
                </div>
                <h1 className='text-4xl font-bold'>Pokédex</h1>
            </div>
        </header>
    )
}