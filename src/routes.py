from flask import current_app as app
from flask import render_template, request, redirect, url_for
from .models import db, Usuario
from .database import obtener_productos
from sqlalchemy.exc import IntegrityError
from sqlalchemy import text
from werkzeug.security import generate_password_hash, check_password_hash
from .config import *
from flask import session

@app.route('/')
def pagina_principal():

    productos_totales = obtener_productos()
    nombre = session.get('user_name')

    PRODUCTOS_PARA_TI = productos_totales[:4]
    PRODUCTOS_NUEVOS_MOSTRAR = productos_totales[5:8]
    PRODUCTOS_MAS_VENDIDOS = productos_totales[8: 11]
    return render_template('index.html', productos=PRODUCTOS_PARA_TI, productos_nuevos=PRODUCTOS_NUEVOS_MOSTRAR, productos_vendidos=PRODUCTOS_MAS_VENDIDOS, nombre=nombre)

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        # Captura de datos
        nombre_usuario = request.form.get('nombre-usuario')
        email = request.form.get('email')
        password = request.form.get('clave')


        # Validacion de datos
        if not nombre_usuario:
            return render_template("registro.html", email_previo=email,  error="Nombre de usuario obligatorio.")
        elif len(nombre_usuario) > MAX_USER_LENGTH:
            return render_template("registro.html", email_previo=email, error=f"Maximo {MAX_USER_LENGTH} caracteres.")
        elif len(nombre_usuario) < MIN_USER_LENGTH:
            return render_template("registro.html", email_previo=email, error=f"Minimo {MIN_USER_LENGTH} caracteres.")
        elif not email:
            return render_template("registro.html", nombre_usuario_previo=nombre_usuario, error="Correo obligatorio.")
        elif "@" not in email:
            return render_template("registro.html", nombre_usuario_previo=nombre_usuario, error="El correo debe tener un @ obligatoriamente.")
        elif len(email) > MAX_EMAIL_LENGTH:
            return render_template("registro.html", nombre_usuario_previo=nombre_usuario, error=f"Maximo {MAX_EMAIL_LENGTH} caracteres.")
        elif not password:
            return render_template("registro.html", nombre_usuario_previo=nombre_usuario, email_previo=email, error="Contraseña obligatoria.")
        elif len(password) < MIN_PASSWORD_LENGTH:
            return render_template("registro.html", nombre_usuario_previo=nombre_usuario, email_previo=email, error=f"Minimo {MIN_PASSWORD_LENGTH} caracteres.")
        
        password_hash = generate_password_hash(password)

        # 1. Crear la instancia del modelo con el hash
        nuevo_usuario = Usuario(
            nombre_usuario=nombre_usuario,
            email=email,
            clave=password_hash
        )

        # 2. Intentar guardar en la Base de Datos
        try:
            db.session.add(nuevo_usuario)
            db.session.commit()

            session['user_id'] = nuevo_usuario.id
            session['user_name'] = nuevo_usuario.nombre_usuario

            return redirect(url_for('pagina_principal'))
            
        except IntegrityError as e:
            db.session.rollback()
            return render_template("registro.html", error="Email ya existen.")
            
        except Exception as e:
            db.session.rollback()
            return render_template("registro.html", error=f"Error técnico: {e}")

    # Si la petición es GET (entrar a la página por primera vez)
    # Si la petición es GET
    return render_template('registro.html', max_l=MAX_USER_LENGTH, min_l=MIN_USER_LENGTH, nombre_usuario_previo="", email_previo="")

@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("clave")

        # 1. Validaciones básicas de formato
        if not email or "@" not in email:
            return render_template("login.html", error="Correo inválido o faltante.")
        
        if not password or len(password) < MIN_PASSWORD_LENGTH:
            return render_template("login.html", email_previo=email, error=f"La contraseña debe tener al menos {MIN_PASSWORD_LENGTH} caracteres.")

        # 2. Búsqueda en la Base de Datos
        usuario_db = Usuario.query.filter_by(email=email).first()

        # 3. Verificación de identidad
        if usuario_db and check_password_hash(usuario_db.clave, password):
            session['user_id'] = usuario_db.id
            session['user_name'] = usuario_db.nombre_usuario
            return redirect(url_for("pagina_principal"))
        
        return render_template("login.html", email_previo=email, error="Correo o contraseña inválidos.")
            
    # GET: Mostrar el formulario limpio
    return render_template('login.html', max_l=MAX_USER_LENGTH, min_l=MIN_USER_LENGTH)

@app.route("/perfil")
def perfil():

    nombre = session.get('user_name')

    return render_template("Perfil.html", nombre=nombre)

@app.route('/logout')
def logout():
    session.clear()  # Borra absolutamente todo lo guardado en la sesión
    return redirect(url_for('pagina_principal')) # Te manda de vuelta a la tienda