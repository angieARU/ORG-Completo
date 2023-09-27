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

    },
    {
      equipo: "Programación",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador"

    },{
      equipo: "Data Science",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador"

    },{
      equipo: "Móvil",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador"

    },{
      equipo: "Innovación y Gestión",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador"

    }
  
  
  ])
//::::::::::::NUEVA LISTA DE EQUIPOS ESTRUCTURADA 
const [equipos,actualizarEquipos]=useState([
      {
      titulo:"Programación",
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
  
])


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

  //eliminar colaborador
  const eliminarColaborador=()=>{
    console.log("Eliminar Colaborador")
  }
//Actualizar color de Equipo
const ActualizarColor=(color,titulo)=>{
  console.log("actualizar:",color,titulo)
  const equiposActualizados =equipos.map((equipo)=>{
    if(equipo.titulo === titulo){
      equipo.colorPrimario = color
    }
    return equipo
  }
  )
  actualizarEquipos(equiposActualizados);

}
//lista de equipos ---- antes de cambiar color
// const equipos =[
//   {
//     titulo:"Programación",
//     colorPrimario:"#57C278",
//     colorSecundario:"#D9F7E9"
//   },
//   {
//     titulo:"Front End",
//     colorPrimario:"#82CFFA",
//     colorSecundario:"#E8F8FF"
  
//   },
//   {
//     titulo:"Data Science",
//     colorPrimario:"#A6D157",
//     colorSecundario:"#F0F8E2"
  
//   },
//   {
//     titulo:"Devops",
//     colorPrimario:"#E06B69",
//     colorSecundario:"#FDE7E8"
  
//   },
//   {
//     titulo:"UX y Diseño",
//     colorPrimario:"#DB6EBF",
//     colorSecundario:"#FAE9F5"
  
//   },
//   {
//     titulo:"Móvil",
//     colorPrimario:"#FFBA05",
//     colorSecundario:"#FFF5D9"
  
//   },
//   {
//     titulo:"Innovación y Gestión",
//     colorPrimario:"#FF8A29",
//     colorSecundario:"#FFEEDF"
  
//   }
// ]



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
              eliminarColaborador={eliminarColaborador}
              ActualizarColor={ActualizarColor}
            />
        })
      }
      <Footer/>
    
  </div>
);
}

export default App;
