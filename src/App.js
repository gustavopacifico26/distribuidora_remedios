import "./App.css";
import HomeADM from './pages/HomeADM';
import HomeCliente from './pages/HomeCliente';
import Pesquisar from './pages/Pesquisar';
import CadastrarHospital from './pages/CadastrarHospital';
import CadastrarRemedio from './pages/CadastrarRemedio';
import GerenciarSolicitações from './pages/GerenciarSolicitações';
import GerenciarItem from './pages/GerenciarItem';
import Estoque from './pages/Estoque';
import Solicitar from './pages/Solicitar';
import Historico from './pages/Historico';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

      
      <Routes>

      <Route exact path="/" element={<Login/>} />

        // Routes do Administrador
        <Route exact path="/homeADM" element={<HomeADM/>} />
        <Route exact path="/cadastrarHospital" element={<CadastrarHospital/>} />
        <Route exact path="/cadastrarRemedio" element={<CadastrarRemedio/>} />
        <Route exact path="/GerenciarSolicitações" element={<GerenciarSolicitações/>} />
        <Route exact path="/estoque" element={<Estoque/>} />
        <Route exact path="/estoque/gerenciarItem" element={<GerenciarItem/>} />

        // Routes do Cliente
        <Route exact path="/homeCliente" element={<HomeCliente/>} />
        <Route exact path="/pesquisar" element={<Pesquisar/>} />
        <Route exact path='/pesquisar/solicitar' element={<Solicitar/>}/>
        <Route exact path='/histórico' element={<Historico/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
