import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; 

function Header() {
    const userName = "R";
    const navigate = useNavigate();

    const irAlPerfil = () => {
        navigate('/perfil');
    };

    return (
    <header>
        <h1>
        <a onClick={() => navigate('/')}>Avila <span className="span-titulo-principal">Streetbags</span></a>
        </h1>
        <div className="header-acciones">
        <form action="" className="form-busqueda-principal">
            <input type="text" placeholder="Bolso Oxford"/>
            <button className="boton-buscar-form-principal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#523120" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="12" r="6"></circle>
                <line x1="21" y1="21" x2="15" y2="16"></line>
            </svg>
            </button>
        </form>
        <nav className="menu-navegacion">
            <ul>
            <li className="link-menu link-contacto">
                <a href="#" draggable="false">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                </a>
            </li>
            <li className="link-menu link-carrito">
                <a href="#" draggable="false">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                </a>
            </li>
            <li className="link-menu link-cuenta">
                <div className="contenedor-usuario">
                {userName ? (
                  // Si hay userName (logueado):
                    <a onClick={irAlPerfil} className="user-avatar-link" draggable="false">
                    <div className="user-avatar-circle">
                        {userName[0].toUpperCase()}
                    </div>
                    </a>
                ) : (
                  // Si NO hay userName (no logueado):
                    <a href="/registro" draggable="false">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </a>
                )}
                </div>
            </li>
            </ul>
        </nav>
        </div>
    </header>
);
}

export default Header;