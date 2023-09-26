import "./Formulario.css"
import CampoTexto from "../campoTexto"

const Formulario = ()=>{
    return <section className="formulario">

        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo ="Nombre" placeholder="Ingrese el Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese el Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de Foto"/>
            
            

        </form>

    </section>
}

export default Formulario