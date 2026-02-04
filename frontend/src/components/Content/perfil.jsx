import React from "react";

function Perfil() {
    // En el futuro, este nombre vendrá de tu base de datos (Python)
    const userName = 'Ricardo'; 

    return (
        // Envolvemos todo en un div para que React no de error
        <div className="perfil-container" style={{ display: 'flex' }}> 
            <nav className="nav-lateral-perfil">
                <header className="encabezado-perfil">
                    <div className="user-avatar-circle">
                        {userName[0].toUpperCase()}
                    </div>
                    {/* Usamos la variable de JS directamente */}
                    <p>{userName}</p>
                </header>
                <div className="links-menu-lateral">
                    <ul>
                        <li><a href="#">Resumen</a></li>
                        <li><a href="#">Mis Pedidos</a></li>
                        <li><a href="#">Datos Personales</a></li>
                        <li><a href="#">Libreta de Direcciones</a></li> 
                        <li><a href="#">Metodos de Pago</a></li>
                        <li><a href="#">Lista de Deseos</a></li>
                        <li><a href="#">Puntos</a></li>
                    </ul>
                </div>
            </nav>

            <main className="contenido-perfil">
                <div id="resumen">
                    <header className="bienvenida">
                        <h1>Resumen de Perfil</h1>
                        <p>Bienvenido de nuevo, <span id="saludo-nombre-usuario">{userName}</span>.</p>
                    </header>

                    <div className="dashboard-grid">
                        <div className="tarjeta-stats">
                            <span className="titulo-stats">Puntos Acumulados</span>
                            <span className="valor-stats">1,250</span>
                        </div>
                        <div className="tarjeta-stats">
                            <span className="titulo-stats">Pedidos Realizados</span>
                            <span className="valor-stats">08</span>
                        </div>
                        <div className="tarjeta-stats">
                            <span className="titulo-stats">Lista de Deseos</span>
                            <span className="valor-stats">12</span>
                        </div>
                    </div>

                    <div className="seccion-info">
                        <h3>Información de Cuenta</h3>
                        <p><strong>Correo:</strong> ricardo@ejemplo.com</p>
                        <p><strong>Miembro desde:</strong> Enero 2024</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Perfil;