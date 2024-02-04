import { PokemonsProvider } from "./context/PokemonProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
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
