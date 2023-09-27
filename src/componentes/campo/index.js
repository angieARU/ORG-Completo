import { useState } from "react"; // despues para mandar datos
import "./Campo.css"

//---------------antes de mandar datos 
// const CampoTexto= (props)=>{
    
//     console.log("datps",props);
//     const placeholderModificaco=`${props.placeholder}...`
//     return <div className="campo-texto">
//         <label>{props.titulo}</label>
//         <input placeholder={placeholderModificaco} required={props.required}/>
//     </div>
// }
//-------------------------------------------------
//--------------------------------------mandamos datos 
const Campo= (props)=>{
    //const [valor,actualizarValor]= useState("")
    //console.log("datps",props);
    const placeholderModificaco=`${props.placeholder}...`
//destructuracion
const{type="text"}=props
                
    
    const manejarCambio=(e)=>{
      //  console.log("cambio",e.target.value)
        props.actualizarValor(e.target.value)
    
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificaco} 
            required={props.required} 
            value ={props.valor}
            onChange={manejarCambio}
            type={type}/>
    </div>
}
export default Campo