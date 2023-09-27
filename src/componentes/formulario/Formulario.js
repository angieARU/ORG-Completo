import { useState } from "react"    
import "./Formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../listaOpciones/ListaOpciones"
import Boton from "../boton/Boton"
//:::::::::::::::::::::::: sin SPA:::::::::::::::::::
// const Formulario = ()=>{
//     return <section className="formulario">

//         <form>
//             <h2>Rellena el formulario para crear el colaborador.</h2>
//             <CampoTexto titulo ="Nombre" placeholder="Ingrese el Nombre"/>
//             <CampoTexto titulo="Puesto" placeholder="Ingrese el Puesto"/>
//             <CampoTexto titulo="Foto" placeholder="Ingrese enlace de Foto"/>
//             <ListaOpciones/>
//             <Boton>
//                 Crear
//             </Boton>

            
            

//         </form>

//     </section>
// }
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::.CON SPA::::::::::::::::::::::::::::::::::::::::::
// const Formulario = ()=>{

//     const manejarEnvio=(evento)=>{
//         evento.preventDefault();
//         console.log(manejarEnvio,evento)
//     }
//     return <section className="formulario">

//         <form onSubmit={manejarEnvio}>
//             <h2>Rellena el formulario para crear el colaborador.</h2>
//             <CampoTexto titulo ="Nombre" placeholder="Ingrese el Nombre" required/>
//             <CampoTexto titulo="Puesto" placeholder="Ingrese el Puesto" required/>
//             <CampoTexto titulo="Foto" placeholder="Ingrese enlace de Foto" required/>
//             <ListaOpciones/>
//             <Boton>
//                 Crear
//             </Boton>

            
            

//         </form>

//     </section>
// }
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::............
//------------------------------------------con usestate para envio de datos del formulario
const Formulario = (props)=>{

    const [nombre,actualizarNombre]=useState("");
    const [puesto,actualizarPuesto]=useState("");
    const [foto,actualizarFoto]=useState("");
    const [equipo,actualizarEquipo]=useState("");

    const{registrarColaborador} =props



    const manejarEnvio=(evento)=>{
        evento.preventDefault();
        console.log("manejarEnvio")
        let datosAEnviar={
            nombre: nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
        console.log(datosAEnviar)
    }
    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo ="Nombre" 
                placeholder="Ingrese el Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingrese el Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}/>
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingrese enlace de Foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}


export default Formulario