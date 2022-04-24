
import './App.css';
import Testimonio from'./componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div>
        <h1> Mi primer aplicacion </h1>
        <Testimonio 
          imag='Frida'
          nombre='Freida Kalo'
          pais='Mexico'
          cargo='Ingeniera de software'
          empresa='Amazon'
          texto='Yo soy Frida Kalo en estos momentos'/>
        <Testimonio 
          imag='irving2'
          nombre='Irving Aldahir Benitez Hernandez'
          pais='Mexico'
          cargo='Ingeniera en Sistemas Inteligentes'
          empresa='Meta'
          texto='Yo soy Irving y me especializo en desarollo de sotfware e inteligencia artificial y vision por computadoras'/>
      </div>
    </div>
  );
}

export default App;
