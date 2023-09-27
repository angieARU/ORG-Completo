import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
const Equipo =(props)=>{
//destructuracion
const {colorPrimario,colorSecundario,titulo,id}=props.datos
const {colaboradores,eliminarColaborador,ActualizarColor,like}=props
    const obj ={
        backgroundColor: hexToRgba( colorPrimario, 0.6)
    }

  //  console.log(colaboradores.length>0)

    const estiloTitulo={borderColor:colorPrimario}
    return <> 
    { colaboradores.length >0 && // solo muestra los que tienen contenido
        <section className="equipo" style={obj}>
            <input 
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento)=>{
                    ActualizarColor(evento.target.value,id)
                    console.log("target:",evento.target.value,id);
                }}
            />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">

            {
                colaboradores.map ((colaborador,index)=> <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
            }
            
        </div>
        </section>
    }
    </>
}
export default Equipo