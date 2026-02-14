import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./perfil.css"
import Resumen from "./resumen/resumen";

function Perfil() {
    // En el futuro, este nombre vendrá de tu base de datos (Python)
    const userName = 'Ricardo'; 

    return (
        <div className="perfil-container" style={{ display: 'flex' }}> 
            <nav className="nav-lateral-perfil">
                <header className="encabezado-perfil">
                    <div className="user-avatar-circle-nav">
                        {userName[0].toUpperCase()}
                    </div>
                    {/* Usamos la variable de JS directamente */}
                    <p>{userName}</p>
                </header>
                <div className="links-menu-lateral">
                    <ul>
                        <li><NavLink to="/perfil" end>Resumen</NavLink></li>
                        <li><NavLink to="/perfil/mis-pedidos">Mis Pedidos</NavLink></li>
                        <li><NavLink to="/perfil" end>Datos Personales</NavLink></li>
                        <li><NavLink to="/perfil/mis-pedidos">Libreta de Direcciones</NavLink></li> 
                        <li><NavLink to="/perfil/mis-pedidos">Metodos de Pago</NavLink></li>
                        <li><NavLink to="/perfil/mis-pedidos">Lista de Deseos</NavLink></li>
                        <li><NavLink to="/perfil/mis-pedidos">Puntos</NavLink></li>
                        <li><NavLink to="/perfil/mis-pedidos">Cerrar sesion</NavLink></li>
                    </ul>
                </div>
            </nav>
            <main className="perfil-content">
                <Outlet />
            </main>
        </div>
    );
}

export default Perfil;