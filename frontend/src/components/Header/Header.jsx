import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Header.css'; 
import { useState } from 'react';


function Header() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(''); 
    const navigate = useNavigate();
    const [userName, setuserName] = useState('');

    const irAlPerfil = () => {
        navigate('/perfil');
    };

    const abrirModal = () => {
        setModalAbierto(true);
        setError('');
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setError('');
    };

    const handleRegistro = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = {
            'nombre_usuario': e.target['nombre_usuario'].value,
            'email': e.target.email.value,
            'clave': e.target.clave.value,
        }

        console.log("Enviando a Flask:", formData);

        try{
            const response = await axios.post(
                'http://localhost:5000/api/auth/register',
                formData,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log('Respuesta de Flask:', response.data);

            if(response.data.success){
                const nombre = response.data.userName;
                localStorage.setItem('userName', nombre); // Lo guardas en el navegador
                setuserName(nombre); 
                alert('Registro exitoso');
                cerrarModal();
            }
            else{
                setError(response.data.success || 'Error en el registro');
            }
        }
            catch (error){
                console.error('Error completo:', error);
                if(error.response){
                    setError(error.response.data.error || 'Error del servidor');
                }
                else if (error.request) {
                    setError('No se pudo conectar con el servidor. ¿Flask está corriendo?');
                }
                else {
                    setError('Error al enviar los datos');
                }   
                } finally {
                setLoading(false);
            }         
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
                    <a onClick={abrirModal} draggable="false">
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

        {modalAbierto && (
                <div className="modal-overlay" onClick={cerrarModal}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={cerrarModal}>×</button>
                        
                        <h2>REGISTRATE</h2>

                        {error && (
                            <div className="error-mensaje">
                                {error}
                            </div>
                        )}
                        
                        <form onSubmit={handleRegistro}>
                            <label htmlFor="nombre-usuario">Nombre de usuario</label><br/>
                            <input 
                                type="text" 
                                className="input-form" 
                                id="nombre_usuario" 
                                name="nombre_usuario"
                                required
                                disabled={loading}
                            /><br/>
                            
                            <label htmlFor="email">E-mail</label><br/>
                            <input 
                                type="email" 
                                className="input-form" 
                                id="email" 
                                name="email"
                                required
                                disabled={loading}
                            /><br/>
                            
                            <label htmlFor="clave">Contraseña</label><br/>
                            <input 
                                type="password" 
                                className="input-form" 
                                id="clave" 
                                name="clave"
                                required
                                disabled={loading}
                            /><br/>
                            
                            <label className="label-checkbox">
                                <input 
                                    type="checkbox" 
                                    className="input-checkbox" 
                                    required 
                                    disabled={loading}
                                /> Acepto términos y condiciones
                            </label>
                            
                            {/* Botón que SOLO cierra el modal (sin conexión) */}
                            <button type="submit" className="btn-input" disabled={loading}>
                                {loading ? 'REGISTRANDO...' : 'REGISTRARME'}
                            </button>
                            
                            <p>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    cerrarModal();
                                }}>Ya tengo una cuenta</a>
                            </p>
                        </form>
                    </div>
                </div>
            )}
    </header>
);
}

export default Header;