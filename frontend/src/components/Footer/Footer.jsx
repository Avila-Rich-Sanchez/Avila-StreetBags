import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            {/* Contenido principal del footer */}
            <div className="footer-main-content">
                <div className="footer-section">
                    <h2 className="logo">Avila<span className="span-titulo-principal">Streetbags</span></h2>
                    <div className="contact-info">
                        <p><i className="fas fa-map-marker-alt"></i> Av. Principal 123, Ciudad</p>
                        <p><i className="fas fa-phone"></i> +1 234 567 8900</p>
                        <p><i className="fas fa-envelope"></i> info@avilastreetbags.com</p>
                    </div>
                    <div className="social-media">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
                
                {/* Añade más secciones si necesitas */}
                <div className="footer-section">
                    <h3>Productos</h3>
                    <ul>
                        <li><a href="#">Carteras</a></li>
                        <li><a href="#">Bolsos</a></li>
                        <li><a href="#">Mochilas</a></li>
                        <li><a href="#">Accesorios</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href="#">Envíos</a></li>
                        <li><a href="#">Devoluciones</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Metodos de Pago</h3>
                    <ul>
                        <li><a href="#">Paypal</a></li>
                        <li><a href="#">Mastercard</a></li>
                        <li><a href="#">Visa</a></li>
                    </ul>
                </div>
            </div>

            {/* BANDA FIJA EN LA PARTE INFERIOR */}
            <div className="banda-final-footer">
                <div className="pais-empresa">VEN</div>
                <div className="opciones-legales">
                    <ul>
                        <li><a href="#">Configuración de cookies</a></li>
                        <li><a href="#">Gestionar Datos</a></li>
                        <li><a href="#">Centro de privacidad</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Aviso de privacidad</a></li>
                        <li><a href="#">Términos y condiciones</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;