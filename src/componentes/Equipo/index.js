import "./Equipo.css"
import Colaborador from "../Colaborador"
const Equipo =(props)=>{
//destructuracion
const {colorPrimario,colorSecundario,titulo}=props.datos
const {colaboradores,eliminarColaborador}=props
    const obj ={
        backgroundColor:colorSecundario
    }

  //  console.log(colaboradores.length>0)

    const estiloTitulo={borderColor:colorPrimario}
    return <> 
    { colaboradores.length >0 && // solo muestra los que tienen contenido
        <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">

            {
                colaboradores.map ((colaborador,index)=> <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        />)
            }
            
        </div>
        </section>
    }
    </>
}
export default Equipo