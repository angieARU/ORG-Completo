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
const Formulario = ()=>{

    const manejarEnvio=(evento)=>{
        evento.preventDefault();
        console.log(manejarEnvio,evento)
    }
    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo ="Nombre" placeholder="Ingrese el Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese el Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de Foto"/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>

            
            

        </form>

    </section>
}


export default Formulario