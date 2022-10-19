import './App.css';
import Coche from '../Coche';
import { useState } from 'react';

function App() {
  // const [resultado, setResultado] = useState(0);

  // const tripleNumeroPadre = (numero) =>{
  //   setResultado(parseInt(numero) * 3);
  //   console.log("El triple es: " + resultado);
  // }

  const tripleNumeroPadre = (numero, metodo) => {
    var resultado = parseInt(numero) * 3;
    metodo(resultado);
    console.log("El triple es: " + resultado);
  }

  return (
    <div>
      <h1>Componente App</h1>
      <Coche Marca="audi" Modelo="Q4" Aceleracion="20" VelocidadMaxima="240"/>
      <Coche Marca="pontiac" Modelo="firebird" Aceleracion="40" VelocidadMaxima="280"/>
    </div>
  );
}

export default App;
