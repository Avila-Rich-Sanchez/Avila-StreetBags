import json
import os

def obtener_productos():
    # Obtenemos la ruta absoluta de la carpeta donde está este archivo (src/)
    directorio_actual = os.path.dirname(__file__)
    
    # Construimos la ruta hacia el JSON subiendo un nivel y entrando a 'database'
    ruta_json = os.path.join(directorio_actual, '..', 'database', 'productos.json')
    
    try:
        with open(ruta_json, "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        print(f"Error: No se encontró el archivo en {ruta_json}")
        return []