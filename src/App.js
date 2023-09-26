import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';


function App() {
  //{Header() } // tambien se puede llamar al componente de estas dos maneras 
    //  <Header></Header>//
    const [mostrarFormulario,actualizarMostrar]= useState(true)
  //ternario --> condicion ? seMuestra : noSeMuestra

//--------------------- antes de ternarios----------------

  // return (
  //   <div >
      
  //     <Header/>
  //     <Formulario/>
  //     <MiOrg/>
  //   </div>
  // );
//-----------------------------------------------------------
//----------------despues de ternarios

  const cambiarMostrar =()=>{
    actualizarMostrar(!mostrarFormulario)
  }
return (
  <div >
    
    <Header/>
    {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/} 
      {// si mostrarFormulario es igual a true va a mostrar el formulario y si no pues muestra el div vacio
      }
      {mostrarFormulario && <Formulario/>}
    <MiOrg cambiarMostrar={cambiarMostrar}/>
  </div>
);
}

export default App;
