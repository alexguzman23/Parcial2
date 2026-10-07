from modelos import Libro, Revista


# Crear libros
libro1 = Libro(
    "Cien Años de Soledad",
    "LIB001",
    True,
    "Gabriel García Márquez"
)

libro2 = Libro(
    "Estructura de Datos en Python",
    "LIB002",
    False,
    "Mark Allen Weiss"
)


# Crear revistas
revista1 = Revista(
    "National Geographic - Edición Especial",
    "REV001",
    True,
    245
)

revista2 = Revista(
    "PC World Digital",
    "REV002",
    True,
    112
)


# Colección de materiales
materiales = [libro1, libro2, revista1, revista2]


print("======================================")
print("     SISTEMA DE BIBLIOTECA")
print("======================================")


# Aplicación del polimorfismo
for material in materiales:

    print("\n--------------------------------------")

    print(material.mostrar_informacion())

    print(f"Dias de prestamo: {material.calcular_dias_prestamo()}")


print("\nFin del listado de materiales.")