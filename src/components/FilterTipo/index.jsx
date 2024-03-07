import style from './styles.module.css'

export const FilterTipo = ({ tipo }) => {
    return (
        <div>
            <h4 className={`font-mono font-semibold text-sm p-2 ${style[tipo.toLowerCase()]} rounded-md text-center
                hover:cursor-pointer
            
            `}>{tipo}</h4>
        </div>
    )
}
