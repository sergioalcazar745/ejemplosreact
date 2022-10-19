import './App.css';
import Matematicas from './../Matematicas';
import Contador from '../Contador';
import Resultado from '../Resultado';
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
      {/* <Matematicas tripleNumeroPadre={tripleNumeroPadre} numero="5"/>
      <Resultado resultado={resultado}/> */}
      <Contador tripleNumeroPadre={tripleNumeroPadre} inicio="22" />
      <Contador tripleNumeroPadre={tripleNumeroPadre} inicio="44" />
      <Contador tripleNumeroPadre={tripleNumeroPadre} inicio="66" />
      <Contador tripleNumeroPadre={tripleNumeroPadre} inicio="14" />
    </div>
  );
}

export default App;
