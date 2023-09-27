import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';


function App() {
  //{Header() } // tambien se puede llamar al componente de estas dos maneras 
    //  <Header></Header>//
    const [mostrarFormulario,actualizarMostrar]= useState(false)
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
  // lista colaboradores
//lista de equipos
const equipos =[
  {
    titulo:"Programacion",
    colorPrimario:"#57C278",
    colorSecundario:"#D9F7E9"
  },
  {
    titulo:"Front End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"
  
  },
  {
    titulo:"Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"
  
  },
  {
    titulo:"Devops",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"
  
  },
  {
    titulo:"UX y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"
  
  },
  {
    titulo:"Móvil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9"
  
  },
  {
    titulo:"Innovación y Gestión",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF"
  
  }
]

return (
  <div >
    
    <Header/>
    {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/} 
      {// si mostrarFormulario es igual a true va a mostrar el formulario y si no pues muestra el div vacio
      }
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}/>}
    <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) =>{
       //   console.log(equipo)
          return <Equipo datos={equipo} key={equipo.titulo}/>
        })
      }
    
  </div>
);
}

export default App;
