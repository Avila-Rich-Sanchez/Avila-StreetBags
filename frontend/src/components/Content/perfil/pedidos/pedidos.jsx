import "./pedidos.css"
import React from 'react';

function MisPedidos() {
    return (
    <div className="seccion-perfil">
        <h2>Mis Pedidos</h2>
        <div className="lista-pedidos">
        <div className="pedido-card">
            <div className="pedido-header">
            <span className="pedido-numero">#12345</span>
            <span className="pedido-fecha">11 Feb 2026</span>
            <span className="pedido-estado entregado">Entregado</span>
            </div>
            <div className="pedido-items">
            <p>Bolso Oxford Negro - 1 unidad</p>
            </div>
            <div className="pedido-total">
            <span>Total: $89.99</span>
            <button className="btn-ver-detalle">Ver Detalle</button>
            </div>
        </div>
        
        <div className="pedido-card">
            <div className="pedido-header">
            <span className="pedido-numero">#12346</span>
            <span className="pedido-fecha">5 Feb 2026</span>
            <span className="pedido-estado en-camino">En camino</span>
            </div>
            <div className="pedido-items">
            <p>Cartera Vintage Marrón - 1 unidad</p>
            <p>Billetera Oxford - 1 unidad</p>
            </div>
            <div className="pedido-total">
            <span>Total: $134.50</span>
            <button className="btn-ver-detalle">Ver Detalle</button>
            </div>
        </div>
        </div>
    </div>
    );
}

export default MisPedidos;