import "./Colaborador.css"
import { TiDeleteOutline } from "react-icons/ti"
//-------------------------------antes de cargar todos los datos
// const Colaborador = () =>{
//     return <div className="colaborador">
//         <div className="encabezado">
//             <img src="https://github.com/angieARU.png" alt="angela"/>
//         </div>
//         <div className="info">
//                 <h4>Angela Rosales</h4>
//                 <h4>Ingeniera</h4>
//         </div>
//     </div>
// }
//:::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::DESPUES DE CARGAR TODOS LOS DATOS:::::::::::::::::::.
const Colaborador = (props) =>{
    const {nombre,puesto,foto,equipo,id}=props.datos
    const {colorPrimario,eliminarColaborador}=props 
    return <div className="colaborador">
        < TiDeleteOutline className="eliminar" onClick={()=> eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
        </div>
    </div>
}
export default Colaborador