import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cadastro } from "./pages/Cadastro"
import { Cadastro_Cliente } from "./pages/Cadastro_Cliente"
import { Cadastro_Estabelecimento } from './pages/Cadastro_Estabelecimento';
import { Cadastro_Produto } from './pages/Cadastro_Produto';
import { Cadastros_Lista } from './pages/Cadastros_Lista';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/home' element={< Home />}/>
        <Route path='/cadastro' element={< Cadastro />}/>
        <Route path='/cadastro_cliente' element={< Cadastro_Cliente />}/>
        <Route path='/cadastro_estabelecimento' element={< Cadastro_Estabelecimento />}/>
        <Route path='/cadastro_produto' element={< Cadastro_Produto />}/>
        <Route path='/cadastros_lista' element={< Cadastros_Lista />}/>
      </Routes>
    </Router>
  );
}
export default App;