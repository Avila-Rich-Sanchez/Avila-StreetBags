from flask import Flask
from flask_cors import CORS  # ← IMPORTANTE: IMPORTA AQUÍ
from .models import db
from .config import SECRET_KEY

def init_cors(app_instance):
    """Configura CORS para React"""
    CORS(app_instance, 
        origins=["http://localhost:5173"],  # React
        supports_credentials=True,
        allow_headers=["Content-Type", "Authorization"])

def create_app():  # ← CORREGIDO: create_app, no created_app
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///datos.db"
    app.config['SECRET_KEY'] = SECRET_KEY
    
    # ✅ CONFIGURACIÓN DE SESIÓN PARA COOKIES ENTRE PUERTOS
    app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
    app.config['SESSION_COOKIE_SECURE'] = False
    app.config['SESSION_COOKIE_HTTPONLY'] = True
    app.config['REMEMBER_COOKIE_HTTPONLY'] = True
    app.config['SESSION_COOKIE_DOMAIN'] = None
    
    db.init_app(app)
    
    # ✅ CONFIGURAR CORS DESPUÉS DE CREAR app
    init_cors(app)

    with app.app_context():
        from . import routes
        db.create_all()

    return app