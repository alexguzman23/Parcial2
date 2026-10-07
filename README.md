# Equipo 7 

## Integrantes
* Jared Emanuel Marín Rodríguez
* Eduard Francisco Peraza Guardado
* Wendy Zelena Peraza Guevara
* Brayan Adonay Peñate Alas
* César Oliver Salazar Mejía
* Pedro Alexander Henriquez Guzman

## Escenario Seleccionado "A" Sistema de biblioteca

## Breve descripción de la solución desarrollada.
Se desarrolló un sistema básico de biblioteca universitaria utilizando Python, HTML, CSS y JavaScript, con el objetivo de facilitar la consulta de libros y revistas disponibles para préstamo. El sistema permite visualizar un catálogo de materiales con información como título, código, autor, número de edición y disponibilidad. Además, cuenta con una interfaz web donde el usuario puede seleccionar un material disponible y visualizar un mensaje con su información y el tiempo de préstamo correspondiente, siendo 7 días para libros y 3 días para revistas.

## Clase padre, clases hijas, método sobrescrito y aplicación del polimorfismo

### Clase padre
La clase padre de nuestro sistema es `MaterialBiblioteca`, la cual contiene los atributos que tienen en común los libros y revistas, como título, código y disponibilidad. También cuenta con el método `mostrar_informacion()`, que permite mostrar los datos de los materiales.

### Clases hijas
Se crearon dos clases hijas llamadas `Libro` y `Revista`, las cuales heredan los atributos y métodos de `MaterialBiblioteca`.

La clase `Libro` agrega el atributo `autor`, mientras que la clase `Revista` incorpora el atributo `numero_edicion`. Ambas utilizan `super().__init__()` para llamar al constructor de la clase padre y reutilizar los atributos comunes.

### Método sobrescrito
El método que se sobrescribe es `mostrar_informacion()`, ya que está definido en la clase padre, pero cada clase hija tiene su propia implementación.

En el caso de `Libro`, muestra el título, código, autor y disponibilidad. Mientras que `Revista` muestra el título, código, número de edición y disponibilidad.

### Aplicación del polimorfismo
El polimorfismo se aplica cuando almacenamos dos libros y dos revistas en una misma lista llamada `materiales` y la recorremos mediante un ciclo `for`.

Dentro del ciclo se utilizan los métodos `mostrar_informacion()` y `calcular_dias_prestamo()`, permitiendo que cada objeto ejecute su propia versión dependiendo del tipo de material.

Por ejemplo, los libros tienen un período de préstamo de 7 días, mientras que las revistas tienen un período de 3 días.

---

## Función de HTML, CSS y JavaScript dentro de la solución

### HTML
HTML se utilizó para crear la estructura de la página web de nuestra biblioteca universitaria. Permite mostrar el nombre del sistema y organizar el catálogo de libros y revistas mediante una tabla que contiene el código, título, tipo de material, detalles, disponibilidad y botón de préstamo.

### CSS
CSS se utilizó para mejorar la presentación visual del sistema, aplicando colores, márgenes y estilos a la tabla y los botones.

También permite identificar fácilmente los materiales disponibles mediante el color verde y los no disponibles mediante el color rojo, además de diferenciar los botones habilitados y deshabilitados.

### JavaScript
JavaScript se utilizó para mostrar dinámicamente los libros y revistas dentro del catálogo y controlar las acciones de los botones.

Cuando el usuario presiona el botón "Solicitar Préstamo" de un material disponible, se muestra un mensaje con su información y los días de préstamo correspondientes.

Además, los botones de los materiales que no están disponibles permanecen deshabilitados para evitar que puedan seleccionarse.

---

## Responsabilidades del frontend y backend

### Frontend
En nuestro Sistema de Biblioteca Universitaria, el frontend es el encargado de mostrar el catálogo de libros y revistas con sus respectivos datos, como título, código, tipo de material, autor o número de edición y disponibilidad.

También permite que el usuario interactúe con el sistema mediante el botón "Solicitar Préstamo", mostrando un mensaje con la información del material seleccionado y los días permitidos para su préstamo.

Para desarrollar esta parte utilizamos HTML, CSS y JavaScript, que permiten organizar el contenido, darle una presentación visual y manejar las interacciones del usuario.

### Backend
En nuestro Sistema de Biblioteca Universitaria, si se implementara un backend web, este sería el encargado de recibir las solicitudes de préstamo enviadas desde el frontend, verificar la disponibilidad de los libros y revistas y determinar los días de préstamo según el tipo de material.

También podría encargarse de registrar los préstamos realizados y actualizar la disponibilidad de los materiales en una base de datos.

En nuestro proyecto, utilizamos Python para representar los materiales y aplicar la lógica de programación orientada a objetos. Sin embargo, esta parte funciona de manera independiente del frontend, ya que no se requiere implementar una conexión entre ambos componentes.
