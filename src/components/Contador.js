import {useState} from 'react';

function Contador(props){
    const {tripleNumeroPadre, inicio} = props;
    const [resultadoContador, setResultadoContador] = useState(parseInt(inicio));

    const dobleNumero = () => {
        setResultadoContador(resultadoContador * 2);
    }

    return (
        <div>
            <h2>Ejemplo State de React</h2>
            <h3>Valor numero: {inicio}</h3>
            <button onClick={() => dobleNumero(inicio)}>Doble de {inicio}</button>
            <button onClick={() => tripleNumeroPadre(resultadoContador, setResultadoContador)}>Triple de {inicio}</button>
            <h1>Resultado: {resultadoContador}</h1>
        </div>
    )
}

export default Contador;
