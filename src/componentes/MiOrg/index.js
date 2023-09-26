import "./MyOrg.css"
import { useState } from "react"
const MiOrg = (props)=>{
// estado -hooks 
//useState =>usa el estado
//useState
console.log(props)
//const [nombreVariable,fincionActualiza]=useState(valorInicial)
  //  const [nombre,actualizarNombre]=useState("angela")


    // const [mostrar,actualizarMostrar]=useState(true)
    // const manejarClick =()=>{
    //     console.log("Mostrar/ocultar",mostrar)
    //     actualizarMostrar(!mostrar);
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organizacion </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}
export default MiOrg