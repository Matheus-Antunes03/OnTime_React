import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cadastro } from "./pages/Cadastro"
import { Cadastro_Cliente } from "./pages/Cadastro_Cliente"
import { Cadastro_Estabelecimento } from './pages/Cadastro_Estabelecimento';
import { Cadastro_Produto } from './pages/Cadastro_Produto';
import { Cadastros_Lista } from './pages/Cadastros_Lista';
import { Editar } from "./pages/Editar";
import { Cadastro_Pedido } from './pages/Cadastro_Pedido';

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
        <Route path='/cadastro_pedido' element={< Cadastro_Pedido />}/>
        <Route path='/cadastros_lista' element={< Cadastros_Lista />}/>
        <Route path='/editar' element={< Editar />}/>
      </Routes>
    </Router>
  );
}
export default App;