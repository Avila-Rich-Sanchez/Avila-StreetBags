// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Content/main';

function App() {
  const CurrentPageContent = "Aqui van lo productos por defecto";

  return (
    <>
      <div className="app-container">
      {/* HEADER FIJO */}
      <Header />

      {/* CONTENIDO CAMBIANTE (MAIN) */}
      <Main />

      {/* FOOTER FIJO */}
      <Footer />
    </div>
    </>
  )
}

export default App
