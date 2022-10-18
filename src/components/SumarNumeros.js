import imagen1 from '../assets/images/imagen1.jpg'

function SumarNumeros(props){
    var {numero1, numero2} = props;

    const sumarNumeros = () => {
        var resultado = parseInt(numero1) + parseInt(numero2);
        console.log(resultado);
    }

    return (
        <div>
            <h1>Componente SumarNumeros</h1>
            <img src={imagen1} width={250} height={200}/><br/>
            <button onClick={()=>sumarNumeros()}>Sumar numeros</button>
        </div>
    );
}

export default SumarNumeros;