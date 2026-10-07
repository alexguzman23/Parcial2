// Clase Padre: MaterialBiblioteca
class MaterialBiblioteca {
    constructor(titulo, codigo, disponibilidad) {
        this.titulo = titulo;
        this.codigo = codigo;
        this.disponibilidad = disponibilidad;
    }

    mostrar_informacion() {
        return `Código: ${this.codigo} | Título: "${this.titulo}" | Disponible: ${this.disponibilidad ? "Sí" : "No"}`;
    }

    calcular_dias_prestamo() {
        return 0;
    }
}

// Clase Hija: Libro
class Libro extends MaterialBiblioteca {
    constructor(titulo, codigo, disponibilidad, autor) {
        super(titulo, codigo, disponibilidad);
        this.autor = autor;
    }

    mostrar_informacion() {
        return `${super.mostrar_informacion()} | Autor: ${this.autor}`;
    }

    calcular_dias_prestamo() {
        return 7;
    }
}

// Clase Hija: Revista
class Revista extends MaterialBiblioteca {
    constructor(titulo, codigo, disponibilidad, numeroEdicion) {
        super(titulo, codigo, disponibilidad);
        this.numeroEdicion = numeroEdicion;
    }

    mostrar_informacion() {
        return `${super.mostrar_informacion()} | Edición N°: ${this.numeroEdicion}`;
    }

    calcular_dias_prestamo() {
        return 3;
    }
}

// Creación de la colección de materiales (Polimorfismo)
const catalogo = [
    new Libro("Cien Años de Soledad", "LIB001", true, "Gabriel García Márquez"),
    new Libro("Estructura de Datos en Python", "LIB002", false, "Mark Allen Weiss"),
    new Revista("National Geographic - Edición Especial", "REV001", true, 245),
    new Revista("PC World Digital", "REV002", true, 112)
];

// Función para renderizar la tabla en HTML
function cargarTabla() {
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    cuerpoTabla.innerHTML = "";

    catalogo.forEach((material, index) => {
        const fila = document.createElement("tr");

        const esLibro = material instanceof Libro;
        const tipoText = esLibro ? "Libro" : "Revista";
        const detalleText = esLibro ? `Autor: ${material.autor}` : `Edición N°: ${material.numeroEdicion}`;
        const dispText = material.disponibilidad ? "Disponible" : "No disponible";
        const dispClase = material.disponibilidad ? "disponible" : "no-disponible";

        fila.innerHTML = `
            <td>${material.codigo}</td>
            <td>${material.titulo}</td>
            <td>${tipoText}</td>
            <td>${detalleText}</td>
            <td class="${dispClase}">${dispText}</td>
            <td>
                <button onclick="solicitarPrestamo(${index})" ${!material.disponibilidad ? "disabled" : ""}>
                    Solicitar Préstamo
                </button>
            </td>
        `;

        cuerpoTabla.appendChild(fila);
    });
}

// Función para manejar el evento de botón
function solicitarPrestamo(indice) {
    const material = catalogo[indice];
    if (material.disponibilidad) {
        const dias = material.calcular_dias_prestamo();
        const info = material.mostrar_informacion();
        alert(`SOLICITUD DE PRÉSTAMO:\n\n${info}\n\nDías asignados para préstamo: ${dias} días.`);
    }
}


window.onload = cargarTabla;