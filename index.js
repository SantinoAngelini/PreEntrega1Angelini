// Bienvenida e ingreso de usuario
let nombreUsuario = prompt("¡Bienvenido a My Key Argentina! por favor ingrese su usuario:");
while (nombreUsuario === "") {
    nombreUsuario = prompt("Por favor, ingrese su usuario");
}

// Declaración de clases
class Juego {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Creación de juegos
const juegos = [
    new Juego("Mortal Kombat 11", 27000, 3),
    new Juego("Dark Souls 3", 13000, 2),
    new Juego("Elden Ring", 60000, 6),
    new Juego("Little Nightmares", 8700, 9),
    new Juego("God of War: Ragnarok", 43000, 1)
];

// Variables para almacenar las opciones del carrito
let opcion = 0;
let carrito = [];

// Funciones
function agregarAlCarrito(juego, cantidad) {
    if (cantidad > juego.cantidad) {
        alert("La cantidad seleccionada no está disponible");
    } else {
        carrito.push({ juego, cantidad });
        alert("¡Su juego se agregó al carrito!");
    }
}

function calcularTotal() {
    return carrito.reduce((total, item) => total + (item.juego.precio * item.cantidad), 0);
}

function mostrarJuegos() {
    let catalogo = "Catálogo de hoy:\n";
    juegos.forEach((juego, index) => {
        catalogo += `${index + 1}) ${juego.nombre} - $${juego.precio} (Cantidad disponible: ${juego.cantidad})\n`;
    });
    catalogo += `${juegos.length + 1}) Ver Carrito`;
    return catalogo;
}

// Bucle para seleccionar los juegos y agregarlos al carrito
alert("Hola " + nombreUsuario + ", este es el catálogo del día de hoy");

while (opcion !== juegos.length +1 ) {
    opcion = parseInt(prompt(mostrarJuegos()));

    if (opcion > 0 && opcion <= juegos.length) {
        const juegoSeleccionado = juegos[opcion - 1];
        const cantidad = parseInt(prompt(`El juego ${juegoSeleccionado.nombre} tiene un precio de $${juegoSeleccionado.precio} por unidad.\nCantidad disponible: ${juegoSeleccionado.cantidad}`));
        agregarAlCarrito(juegoSeleccionado, cantidad);
    }
}

// Muestra la suma total de todos los juegos seleccionados en el carrito
const totalCarrito = calcularTotal();
alert("El total del carrito es: $" + totalCarrito);
alert("¡Muchas gracias por su compra!");
