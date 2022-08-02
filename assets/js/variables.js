// Mejores prácticas con el uso de variables

var a;
var a1;
var a_Nombre;
var a$Direccion; // no comúnmente utilizadas;

// Declaración de variables

// Número
var edad = 25;
var peso = 98;

// Booleanos
var ciego = true;
var hambre = false;
var sueño = false;

// String
var nombre = 'Jaciel';
var ciudad = 'Puerto Escondido';
var nacionalidad = `Mexicano`;

// Null
var ganasDeBibir = null;
var dineros = null;
var briAmonestaciones = null;

var x,
	y,
	z = 0;

var xx, yy, zz;

var uxo = (dox = trex = 4);

// carrito de compras

/* getNameVar solo funciona en la consola NodeJS por el objeto global; 
	en el navegador se debe cambiar por el objeto nodewindow */
// function getNameVar(v) {
// 	for (var key in global) {
// 		if (global[key] === v) return key;
// 	}
// 	return false;
// }

var item, precio, descuento, categoria, cantidad;
// let nombreV = getNameVar(item);
console.log(`La variable 'item' es de tipo ${typeof item}`);
console.log(global);

// typeOf

var a = 2;
typeof a; //number
var b = 'hola';
typeof b; //string
var c = true;
typeof c; //boolean
var d = null;
typeof d; //object

// isNaN() es una función que nos permite verificar si un dato
// es o no es un número --> weird

/* Ejercicio 1 */

var energia,
	hambre,
	motivacion,
	animo,
	buenHumor = false;
var sueño,
	malHumor,
	flojera = true;

var nombre = 'Jaciel';
var apellidoPaterno = 'Jacinto';
var apellidoMaterno = 'Menera';
var perro1 = 'Chester';
var perro2 = 'Coqueto';
var perro3 = 'Muñeca';
var perro4 = 'Campeona';
var perro5 = 'Higo';
var perro6 = 'Negrita';
var perro7 = 'Huesito';
var gata = 'Michu';

var age = 25;
var birthDay = 2;
var birthMonth = 3;
var birthYear = 1997;
var weight = 98; //kg
var height = 175; //cm
var bikeTravel = 6000; //km
var sleepHours = 6;
var savings = 10000; //MXN
var creditCardDebt = 3083.64; //MXN

// Nueva forma de declarar variables

var a1 = 1;
let a2 = 1;
const a3 = 1;

a3++; // devuelve error

// arrays
const carros = ['Honda', 'Ford', 'Tesla', 'Koegnisegg'];

const carritoCompras = [
	'Leche',
	'Tortillas',
	'Mango',
	'Maruchan',
	'Aguacate',
	'Sandia',
	'Queso',
	'Sabritas',
	'Oreo',
	'Piña',
	'Chachitos',
	'Pollo',
	'Jamon',
	'Harina',
	'Mantequilla',
	'Chocolate',
	'Wafflera Plaza Sesamo',
	'Nutella',
	'Fresas',
	'Servilletas',
	'Xbox Series X',
];

const mix = [1, 'Jaciel', null, true, carros];
