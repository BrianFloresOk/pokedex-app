import style from './styles.module.css'

export function Tipo({tipo1, tipo2}) {
    
    return (
        <div>
            <span className={`font-mono font-semibold text-sm p-2 ${style[tipo1.toLowerCase()]} rounded-md`}>{tipo1}</span>
            {
                tipo2 !== "" &&
                <span className={`font-mono font-semibold text-sm p-2 ${style[tipo2.toLowerCase()]} rounded-md`}>{tipo2}</span>
            }
        </div>
    )
}