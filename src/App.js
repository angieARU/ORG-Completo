import { useState } from 'react';
import {v4 as uuid} from "uuid"
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
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador",
      fav:true

    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador",
      fav:false

    },{
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador",
      fav:false

    },{
      id: uuid(),
      equipo: "Móvil",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador",
      fav:false

    },{
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/angieARU.png",
      nombre: "Angela Rosales",
      puesto: "Desarrollador",
      fav:false

    }
  
  
  ])
//::::::::::::NUEVA LISTA DE EQUIPOS ESTRUCTURADA 
const [equipos,actualizarEquipos]=useState([
      {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    
    },
    {
      id: uuid(),
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
  const eliminarColaborador=(id)=>{
    console.log("Eliminar Colaborador",id)
    const nuevosColaboradores=colaboradores.filter((colaboradores)=>colaboradores.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
//Actualizar color de Equipo
const ActualizarColor=(color,id)=>{
  console.log("actualizar:",color,id)
  const equiposActualizados =equipos.map((equipo)=>{
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  }
  )
  actualizarEquipos(equiposActualizados);

}

//crear equipo
const crearEquipo =(nuevoEquipo)=>{
  console.log(nuevoEquipo);
  actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid}])
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
//hacer like

const like=(id)=>{
  console.log(like)
  const colaboradoresActualizados=colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}


return (
  <div >
    
    <Header/>
    {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/} 
      {// si mostrarFormulario es igual a true va a mostrar el formulario y si no pues muestra el div vacio
      }
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
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
              like={like}
            />
        })
      }
      <Footer/>
    
  </div>
);
}

export default App;
