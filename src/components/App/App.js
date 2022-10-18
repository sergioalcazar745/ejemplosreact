import './App.css';
import Matematicas from './../Matematicas';
import Resultado from './Resultado';

function App() {

  var resultado = 0
  const tripleNumeroPadre = (numero) =>{
    resultado = numero * 3;
    console.log("El triple es: " + resultado);
  }

  return (
    <div>
      <h1>Componente App</h1>
      <Matematicas tripleNumeroPadre={tripleNumeroPadre} numero="5"/>
      <Resultado resultado={resultado}/>
    </div>
  );
}

export default App;
