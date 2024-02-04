import { PokemonsProvider } from "./context/PokemonProvider";
import Home from "./pages/Home";
import { TypePokemonsProvider } from "./context/TypePokemonProvider";

function App() {

  return (
    <TypePokemonsProvider>
      <PokemonsProvider>
        <Home />
      </PokemonsProvider>
    </TypePokemonsProvider>
  )
}

export default App
