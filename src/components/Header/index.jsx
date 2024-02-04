import style from './styles.module.css'
import pokedex from '../../assets/pokedex.png'

export function Header() {
    return(
        <header className={style.header}>
            <div className={style.title__container}>
                <div>
                    <img src={pokedex} alt=""/>
                </div>
                <h1>Pokédex</h1>
            </div>
        </header>
    )
}