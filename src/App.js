import logo from './logo.svg';
import './App.css';
import { Titulo } from './componentes/Titulo';

function App() {
  function Carro() {
    return <h3>E eu sou um carro</h3>
  }

  function Caminhao() {
    return <h3>Eu sou um caminhão</h3>
  }

  return (
    <div>
      <Caminhao />
      <Carro />
      <Titulo />
    </div>
  );
}

export default App;
