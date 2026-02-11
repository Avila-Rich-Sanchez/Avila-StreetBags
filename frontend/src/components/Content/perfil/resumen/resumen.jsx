import React from "react";
import "./resumen.css";

function Resumen(){

    const userName = "Ricardo";

    return(

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
    );
}

export default Resumen