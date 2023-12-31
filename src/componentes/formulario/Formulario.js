import { useState } from "react"    
import "./Formulario.css"
import Campo from "../campo"
import ListaOpciones from "../listaOpciones/ListaOpciones"
import Boton from "../boton/Boton"
//:::::::::::::::::::::::: sin SPA:::::::::::::::::::
// const Formulario = ()=>{
//     return <section className="formulario">

//         <form>
//             <h2>Rellena el formulario para crear el colaborador.</h2>
//             <Campo titulo ="Nombre" placeholder="Ingrese el Nombre"/>
//             <Campo titulo="Puesto" placeholder="Ingrese el Puesto"/>
//             <Campo titulo="Foto" placeholder="Ingrese enlace de Foto"/>
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
//             <Campo titulo ="Nombre" placeholder="Ingrese el Nombre" required/>
//             <Campo titulo="Puesto" placeholder="Ingrese el Puesto" required/>
//             <Campo titulo="Foto" placeholder="Ingrese enlace de Foto" required/>
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
    const [titulo,actualizarTitulo]=useState("");
    const [color,actualizarColor]=useState("");

    const{registrarColaborador,crearEquipo} =props



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

    const manejarNuevoEquipo=(e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo ="Nombre" 
                placeholder="Ingrese el Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingrese el Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}/>
            <Campo 
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

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo ="Titulo" 
                placeholder="Ingrese el Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingrese el color en hex" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"/>
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}


export default Formulario