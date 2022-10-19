import {useState} from 'react';

function Coche(props) {
    //TENDREMOS UNA VARIABLE PARA SABER SI ESTA ARRANCADO O NO
    const[estado, setEstado] = useState(false);
    //TENDREMOS UNA VARIABLE PARA SABER LA VELOCIDAD ACTUAL
    const[velocidad, setVelocidad] = useState(0);

    var coche = {
        marca: props.Marca,
        modelo: props.Modelo,
        aceleracion: parseInt(props.Aceleracion),
        velocidadMaxima: parseInt(props.VelocidadMaxima)
    }

    //CREAMOS UN METODO PARA DEVOLVER EL ESTADO DEL COCHE
    const comprobarEstado = () => {
        if(estado == true){
            return (<h1 style={{color:"green"}}>Arrancado</h1>)
        }else{
            return (<h1 style={{color:"red"}}>Detenido</h1>)
        }
    }

    //VAMOS A REALIZAR UN METODO PARA ACELERAR EL VEHICULO
    const acelerarCoche = () =>{
        if(estado == false){
            alert("El coche esta detenido");
            setVelocidad(0);
        }else{
            if (velocidad >= coche.velocidadMaxima){
                setVelocidad(coche.velocidadMaxima);
            }else{
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }

    return (
        <div style={{color: "blue"}}>
            <h2>Coche</h2>
            <p>Marca: {coche.marca}</p>
            <p>Modelo: {coche.modelo}</p>
            <div>
                {comprobarEstado()}
            </div>
            <h1>Velocidad actual {velocidad} km/hora</h1> 
            <button onClick={ () => {
                setEstado(!estado);               
            }}>Arrancar/Detener</button>
            <button onClick={ () => acelerarCoche()}>Acelerar coche</button>
        </div>
    );
}

export default Coche;