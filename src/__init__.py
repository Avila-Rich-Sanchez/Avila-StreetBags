from flask import Flask
from .models import db
from .config import SECRET_KEY

def created_app():
    app = Flask(__name__, static_folder="../static", template_folder="../templates")
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///datos.db"
    app.config['SECRET_KEY'] = SECRET_KEY

    db.init_app(app)

    with app.app_context():
        from . import routes
        db.create_all()

    return app