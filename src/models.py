from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column
import sqlalchemy as sq
from .config import *

db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = "usuarios"

    id: Mapped[int] = mapped_column(primary_key=True)
    nombre_usuario: Mapped[str] = mapped_column(sq.String(MAX_USER_LENGTH), nullable=False)
    email: Mapped[str] = mapped_column(sq.String(MAX_EMAIL_LENGTH), unique=True, nullable=False)
    clave: Mapped[str] = mapped_column(sq.String(255), nullable=False)
