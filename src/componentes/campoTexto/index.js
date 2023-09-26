import "./CampoTexto.css"
const CampoTexto= (props)=>{
    console.log("datps",props.titulo);
    const placeholderModificaco=`${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificaco}/>
    </div>
}
export default CampoTexto