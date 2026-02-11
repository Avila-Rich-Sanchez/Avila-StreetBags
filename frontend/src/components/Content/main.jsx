import React from "react";
import './main.css'

function Main(){

    const productos = [
        { id: 1, nombre: "Bolso Oxford 1", imagen: "../../../public/bolso-negro.jpg", precio:"20$" },
        { id: 2, nombre: "Bolso Oxford 2", imagen: "../../../public/Bolso-azul.jpg", precio:"20$"},
        { id: 3, nombre: "Bolso Oxford 3", imagen: "../../../public/Imagen-producto.png", precio:"20$" },
    ];

    return (
        <main>
        <section className="menu-navegacion-main">
                <ul>
                    <li><a href="#" id="destacado-menu-navegacion">Lo Más Destacado</a></li>
                    <li><a href="#">Carteras</a></li>
                    <li><a href="#">Bolsos</a></li>
                    <li><a href="#">Billeteras</a></li>
                    <li><a href="#">Accesorios</a></li>
                </ul>
            </section>

            <div className="container-principal">
                <section className="para-ti">
                    <h2>Para ti</h2>
                    <div className="lista-productos">
                        {productos.map((producto) => (
                            <article className="tarjeta-producto" key={producto.id}>
                                <div className="imagen-producto">
                                    <img src={producto.imagen} alt={producto.nombre} draggable="false" />
                                    <div className="ver-detalles-overlay">
                                        <a href="#" className="detalles-boton">Ver detalles</a>
                                        <a href="#" className="detalles-boton añadir-carrito">Añadir al carrito</a>
                                    </div>
                                </div>
                                <h3>{producto.nombre}</h3>
                                <p className="precio">${producto.precio}</p>
                            </article>
                        ))}
                    </div>
                </section>
                <hr />
                <section className="productos-nuevos">
                    <h2>Lo Mas Nuevo</h2>
                    <div className="lista-productos">
                        {productos.map((producto) => (
                            <article className="tarjeta-producto" key={producto.id}>
                                <div className="imagen-producto">
                                    <img src={producto.imagen} alt={producto.nombre} draggable="false" />
                                    <div className="ver-detalles-overlay">
                                        <a href="#" className="detalles-boton">Ver detalles</a>
                                        <a href="#" className="detalles-boton añadir-carrito">Añadir al carrito</a>
                                    </div>
                                </div>
                                <h3>{producto.nombre}</h3>
                                <p className="precio">${producto.precio}</p>
                            </article>
                        ))}
                    </div>
                </section>
                <hr />
                <section className="mas-vendidos">
                    <h2>Mas Vendidos</h2>
                    <div className="lista-productos">
                        {productos.map((producto) => (
                            <article className="tarjeta-producto" key={producto.id}>
                                <div className="imagen-producto">
                                    <img src={producto.imagen} alt={producto.nombre} draggable="false" />
                                    <div className="ver-detalles-overlay">
                                        <a href="#" className="detalles-boton">Ver detalles</a>
                                        <a href="#" className="detalles-boton añadir-carrito">Añadir al carrito</a>
                                    </div>
                                </div>
                                <h3>{producto.nombre}</h3>
                                <p className="precio">${producto.precio}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
    </main>
    );
}

export default Main