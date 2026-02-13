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

@app.route("/api/auth/me", methods=['GET'])
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
    
