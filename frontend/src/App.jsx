import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Content/main';
import Perfil from './components/Content/perfil/perfil'
import Resumen from "./components/Content/perfil/resumen/resumen";
import MisPedidos from "./components/Content/perfil/pedidos/pedidos";

function App() {
  const CurrentPageContent = "Aqui van lo productos por defecto";

  return (
    <BrowserRouter>
      <div className="app-container">
      {/* HEADER FIJO */}
      <Header />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/perfil" element={<Perfil />}>
          <Route index element={<Resumen />}/>
          <Route path="mis-pedidos" element={<MisPedidos />}/>
        </Route>
      </Routes>

      {/* FOOTER FIJO */}
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App