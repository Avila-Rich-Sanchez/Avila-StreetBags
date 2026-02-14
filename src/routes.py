from flask import current_app as app
from flask import request, jsonify, session
from .models import db, Usuario
from sqlalchemy.exc import IntegrityError
from werkzeug.security import generate_password_hash, check_password_hash
from .config import *
from functools import wraps

def login_required_api(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return jsonify({'authenticated': False, 'error': 'No autenticado'}), 401
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def pagina_principal_api():
    return jsonify({"Bienvenido": "Puerto 5000"})

@app.route("/api/auth/login", methods=['GET'])
def usuario_logueado():
    user_id = session.get('user_id') # Se lee la sesion actual
    if not user_id: # -> Si hay o no hay sesion actual
        return jsonify({'Error': 'El usuario no esta logueado'}), 401
    
    usuario = Usuario.query.get(user_id) # -> Para buscar todos los datos del usuario

    if not usuario: # -> Por si el usuario no es encuentra en la base de datos
        return jsonify({'Error': 'Usuario no encontrado'}), 404
    
    return jsonify({ # -> Nos retorna todos los datos del usuario
        'authenticated': True,
        'user':{
            'id': usuario.id,
            'nombre': usuario.nombre_usuario,
            'email': usuario.email,
        }
    })

@app.route("/api/auth/register", methods=['POST'])
def registrar_usuario():
    datos_usuario = request.get_json()
    
    nombre_usuario = datos_usuario.get('nombre_usuario')
    _clave = datos_usuario.get("clave")

    if not _clave:
        return jsonify({"success": False, "error": "La clave es obligatoria"}), 400

    clave_encriptada = generate_password_hash(_clave)
    
    try:

        nuevo_usuario = Usuario(
            nombre_usuario = datos_usuario.get("nombre_usuario"),
            email = datos_usuario.get("email"),
            clave = clave_encriptada
        )

        db.session.add(nuevo_usuario)

        db.session.commit()

        return jsonify({
            'success': True,
            'mensaje': 'Usuario registrado correctamente',
            'userName': nombre_usuario
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({
            "success": False, 
            "error": "El email o nombre de usuario ya existen",
        }), 400
    