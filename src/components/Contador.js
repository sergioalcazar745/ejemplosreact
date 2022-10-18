import {useState} from 'react';

function Contador(props){
    const {tripleNumeroPadre, inicio} = props;
    const [numero, setNumero] = useState(parseInt(inicio));

    const dobleNumero = () => {
        console.log("El doble es: " + parseInt(numero) * 2)
    }

    return (
        <div>
            <h1>Ejemplo State de React</h1>
            <h3>Valor numero: {numero}</h3>
            <button onClick={() => dobleNumero()}>Doble de {numero}</button>
            <button onClick={() => tripleNumeroPadre(inicio)}>Triple de {numero}</button>
        </div>
    )
}

export default Contador;
