import "./CampoTexto.css"
const CampoTexto= (props)=>{
    console.log("datps",props);
    const placeholderModificaco=`${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificaco} required={props.required}/>
    </div>
}
export default CampoTexto