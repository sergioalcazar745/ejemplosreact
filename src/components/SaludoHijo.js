function SaludoHijo(props){
    var metodo = props.metodo;
    var idhijo = props.idhijo;
    return (
        <div>
            <h1>Eventos hijo {idhijo}</h1>
            <button onClick={ () => metodo("Sergio " + idhijo) }>LLamar método Padre</button>
        </div>
    )
}

export default SaludoHijo;