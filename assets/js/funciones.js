// Funciones iniciales

// Definición
function myFunction() {
	console.log('Do something');
}

function myName(name) {
	console.log(name);
}

// Invocación
myFunction();
myName('Jaciel');

// Scope

// LET
// no devuelve undefines, devuelve que no es posible ser accesada antes de inicializarla;
// console.log(r); //ReferenceError: Cannot access 'r' before initialization
let r = 'Nyan';

// VAR
// undefined
let s = 'Cat';
console.log(s);

function imprimir(x) {
	console.log(x);
}

let miNombre = 'Jaciel';
imprimir(miNombre);
imprimir('Ola ke ase');
imprimir(29);

function dosParam(x, y) {
	console.log(`${x} ${y}`);
}

dosParam('Hola', 'mundo');

function tresParam(x, y, z) {
	console.log(`${x} ${y} ${z}`);
}

tresParam('Hola', 'soy', null);

// ////////////////////////////////////////
//  OUTPUT

function out() {
	let x = 2;
	return x;
}

console.log(out());

pop = () => 2;
console.log(pop());

function areaCuadrado(b, a) {
	let res = a * b;
	return res;
}

let resu = areaCuadrado(3, 6);

areaRectangulo = (a, b) => a * b;
areaTriangulo = (a, b) => (a * b) / 2;

let again = areaRectangulo(3, 8);
let tri = areaTriangulo(4, 4);
console.log(resu);
console.log(again);
console.log(tri);

// hola
// adios
