import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/footer';


function App() {
  //{Header() } // tambien se puede llamar al componente de estas dos maneras 
    //  <Header></Header>//
    const [mostrarFormulario,actualizarMostrar]= useState(false)
    const [colaboradores,actualizarColaboradores]=useState([{
      equipo: "Front End",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador"

    }])
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
  // registrar colaboradores
  const registrarColaborador=(colaborador)=>{
    console.log("nuevo",colaborador)
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
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
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        />}
        <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) =>{
       //   console.log(equipo)
          return <Equipo 
              datos={equipo} 
              key={equipo.titulo}
              colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
            />
        })
      }
      <Footer/>
    
  </div>
);
}

export default App;
