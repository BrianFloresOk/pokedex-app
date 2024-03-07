import { FilterContent } from "../FilterContent";

export function SearchForm() {
    return (
        <div className="my-10">
            <form>
                <div className="my-6 w-1/2 mx-auto">
                    <div className="w-10/12 mx-auto shadow-md">
                        <input type="text" className="w-4/5 h-9 p-2 text-lg" placeholder="Buscar.." />
                        <button className="text-lg w-1/5 p-2 text-cyan-50 bg-red-400 hover:bg-red-600 active:bg-red-800 rounded-r-lg" type="button" id="button-add">Buscar</button>
                    </div>
                </div>
            </form>
            <FilterContent />
        </div>

    )
}