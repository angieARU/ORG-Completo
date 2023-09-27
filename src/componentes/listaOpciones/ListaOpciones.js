import "./ListaOpciones.css"
const ListaOpciones = (props)=>{

//metodo map para leer array -> arreglo.map((equipo,index)=>{
//      return <option></option>
// })

//------------------- solo usando option 
    // return <div className="listaOpciones">
    //     <label >
    //         Equipos
    //     </label>
    //     <select>
    //         <option>Programacion</option>
    //         <option>Frond End</option>
    //         <option>Data Science</option>
    //         <option>Devops</option>
    //         <option>UX y Diseño</option>
    //         <option>Móvil</option>
    //         <option>Innovación y Gestión</option>
    //     </select>
    //     </div>
// -------------USANDO ARRAY Y MAP PARA LEER
const manejarCambio=(e)=>{
    console.log("cambio",e.target.value)
    props.actualizarEquipo(e.target.value)
}
return <div className="listaOpciones">
        <label >
            Equipos
        </label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
            {props.equipos.map((equipo,index)=> <option key={index} value={equipo}>{equipo}</option>)}
        </select>
        </div>
}
export default ListaOpciones