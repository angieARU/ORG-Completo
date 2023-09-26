import "./ListaOpciones.css"
const ListaOpciones = ()=>{

//metodo map para leer array -> arreglo.map((equipo,index)=>{
//      return <option></option>
// })
    const equipos =[
        "Programacion",
        "Frond End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
  
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
return <div className="listaOpciones">
        <label >
            Equipos
        </label>
        <select>
            { equipos.map((equipo,index)=> <option key={index} >{equipo}</option>)}
        </select>
        </div>
}
export default ListaOpciones