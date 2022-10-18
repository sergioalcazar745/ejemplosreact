function Matematicas1(props){

    var numero = props.numero;
    var tripleNumeroPadre = props.tripleNumeroPadre;

    const dobleNumero = () => {
        console.log("El doble es: " + parseInt(numero) * 2)
    }

    return (
        <div>
            <h1>Hijo -- Matematicas</h1>
            <button onClick={() => dobleNumero()}>Doble de {numero}</button>
            <button onClick={() => tripleNumeroPadre(numero)}>Triple de {numero}</button>
        </div>
    )
}

export default Matematicas1;