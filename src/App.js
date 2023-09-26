
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/Formulario';


function App() {
  //{Header() } // tambien se puede llamar al componente de estas dos maneras 
    //  <Header></Header>//
  return (
    <div >
      
      <Header/>
      <Formulario/>
    </div>
  );
}

export default App;
