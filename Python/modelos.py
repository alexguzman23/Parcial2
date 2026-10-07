# Clase padre
class MaterialBiblioteca:

    def __init__(self, titulo, codigo, disponibilidad):
        self.titulo = titulo
        self.codigo = codigo
        self.disponibilidad = disponibilidad

    def mostrar_informacion(self):
        return f"Codigo: {self.codigo} | Titulo: {self.titulo}"

    def calcular_dias_prestamo(self):
        return 0


# Clase hija Libro
class Libro(MaterialBiblioteca):

    def __init__(self, titulo, codigo, disponibilidad, autor):
        super().__init__(titulo, codigo, disponibilidad)
        self.autor = autor

    def mostrar_informacion(self):
        disponible = "Si" if self.disponibilidad else "No"

        return (
            f"Tipo: Libro\n"
            f"Codigo: {self.codigo}\n"
            f"Titulo: {self.titulo}\n"
            f"Autor: {self.autor}\n"
            f"Disponible: {disponible}"
        )

    def calcular_dias_prestamo(self):
        return 7


# Clase hija Revista
class Revista(MaterialBiblioteca):

    def __init__(self, titulo, codigo, disponibilidad, numero_edicion):
        super().__init__(titulo, codigo, disponibilidad)
        self.numero_edicion = numero_edicion

    def mostrar_informacion(self):
        disponible = "Si" if self.disponibilidad else "No"

        return (
            f"Tipo: Revista\n"
            f"Codigo: {self.codigo}\n"
            f"Titulo: {self.titulo}\n"
            f"Numero de edicion: {self.numero_edicion}\n"
            f"Disponible: {disponible}"
        )

    def calcular_dias_prestamo(self):
        return 3