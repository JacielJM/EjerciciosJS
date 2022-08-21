// alert('Holi c:');

/* 

ARRAYS O ARREGLOS

Dfn
Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.
Cuando tenemos una variable, la usamos para almacenar un solo dato. En cambio, en un arreglo, guardamos muchos datos, a manera de lista.

Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos


*/

let nombre = 'Jaciel';

const array = ['Jaciel', 'Nataly', 'Mariana', 'Alonso', 'Briana'];

/* CREACIÓN 
    Usando el constructor de clase

*/

const marcaDeColores = new Array(
	'Mapita',
	'Prismacolor',
	'BlancaNieves',
	'Faber Castell'
);

// Directamente

const listaPerritos = [
	'labrador',
	'corgi',
	'San Bernardo',
	'Pitbul',
	'Bichón Maltés',
];

// console.log(listaPerritos);

// 5 arreglos random

const pecesFeos = ['Pez Globo', 'Pez Bruja', 'Pez Moly', 'Pez Ángel'];

const comidaMexicana = ['Chilaquiles', 'Tacos', 'Tamales', 'Mole', 'Pozole'];

const pasatiempos = [
	'Escuchar música',
	'Patinar',
	'Correr',
	'Dibujar',
	'Dormir',
];

const bebidas = ['Chocomilk', 'Margaritas', 'Horchata', 'Jamaica', 'Cerveza'];

const paises = [
	'México',
	'Alemania',
	'Costa Rica',
	'Brasil',
	'Suiza',
	'Egipto',
];

//Ejemplo de Arreglo 2
listaDelSuper = ['Leche', 'Papitas', 'Jabon', 'Nachos', 'Huevos'];
// console.log(listaDelSuper);

// console.log(`El producto en la posición 1 es: ${listaDelSuper[1]}`);
// console.log(`El producto en la posición 4 es: ${listaDelSuper[4]}`);
// console.log(`El producto en la posición 2 es: ${listaDelSuper[2]}`);
// console.log(`El producto en la posición 6 es: ${listaDelSuper[6]}\n`);

for (let i = 0; i < listaPerritos.length; i++) {
	// console.log(`El perrito en la posición ${i} es: ${listaPerritos[i]}`);
}

// https://open.spotify.com/track/4H8AfSDk1cWrYiV35VCdyA?si=f13187a87d094f7d

/*
    Array asociativo ~= Objetos

    Son arreglos donde cada elemento está asociado no solo con su índice, si no que también está asignado a un identificador

*/

const propiedadesComputadora = {
	marca: 'Asus',
	procesador: 'Ryzen 5 5600X',
	ram: '16 GB',
	almacenamiento: '1 TB',
	tipo: 'ssd',
	graficos: 'RTX 3090 Ti',
};

// console.log(`La RAM de mi computadora es ${propiedadesComputadora.ram}`);

//Ejemplo de una Red Social
let publicacionRedSocial = {
	nombre: 'Felipe',
	usuario: '@felipecontenis',
	fecha: 'Agosto',
	likes: '5000',
	descripcion: 'Esta es una bonita foto de lasagna',
	ubicacion: 'Estado de Mexico',
};

// console.log(
// 	'Estas son las publicaciones de Agosto: ',
// 	publicacionRedSocial.fecha
// );

/*
Metodos de los arrays 

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elemenos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

Podemos dividir estos metodos en 3: 

    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos (spoiler)

    //Metodos transformadores
    
    //push(): Agrega un elemento al final del arreglo
    arrayDeEjemplo.push("Pitaya");
    console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo: ", arrayDeEjemplo);
    
    //pop(): Eliminar el ultimo elemento del arreglo
    arrayDeEjemplo.pop(); //con pop no hace falta especificar el dato
    console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);
*/
// console.log('\n');

const frutas = ['Manzana', 'Pera', 'Guanábana', 'Coco'];
// console.log(frutas);

frutas.push('Pitaya');

// console.log(frutas);

frutas.pop();

// console.log(frutas);

frutas.unshift('Piña', 'Mandarina', 'Uvas');

// console.log(frutas);

frutas.sort();

// console.log(frutas);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
frutas.sort();
// console.log('Este es mi arreglo de ejemplo ordenado', frutas);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
frutas.reverse();
// console.log('Este es nuestro arreglo invertido', frutas);

//slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)
var saludo1 = 'Hola, estoy aprendiendo arreglos en Generation';
var saludo2 = saludo1.slice(3, 4);
// console.log('Imprimimos la rebanada del arreglo original', saludo2);

var saludo3 = saludo1.slice(9);
// console.log('Imprimimos la rebanada del arreglo original', saludo3);

var saludo4 = saludo1.slice(-9, -5);
// console.log('Imprimimos la rebanada del arreglo original', saludo4);

/*
//splice(): Modificar el arreglo en 3 formas distintas

- Eliminar elementos del arreglo
- Agregar elementos nuevos al arreglo
- Reemplazar elementos que ya existen en el arreglo


Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ['Enero', 'Febrero', 'Agosto', 'Septiembre'];
// console.log('Este es nuestro arrreglo de los meses del anio: ', mesesDelAnio);

//Eliminar y agregar datos usando splice
mesesDelAnio.splice(1, 2, 'Abril', 'Mayo');
// console.log('Este es el nuevo arreglo con los meses borrados: ', mesesDelAnio);

//Agregar elemenos sin borrar nada arreglo
let diasSemana = ['Lunes', 'Martes', 'Miercoles'];
// console.log('Los dias de la semana son: ', diasSemana);

diasSemana.splice(5, 0, 'Jueves', 'Viernes', 'Sabado');

// console.log('Los nuevos dias de la semana son: ', diasSemana);

/*
Metodos Accesores
*/

var ensalada = ['jitomate', 'zanahoria', 'lechuga', 'chicharos', 'cebolla'];

//length():Nos permite saber el numero de elementos o longitud del arreglo

// console.log('Tenemos estos elementos en el arreglo ensalada ', ensalada.length);

//join(): Nos permite unir los elementos del arreglo con una cadena de texto
// console.log('Esta es una feliensalada: ', ensalada.join('-'));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = [
	'galletas',
	'chetos',
	'glorias',
	'galletas',
	'gansitos',
	'picafresas',
	'tamborines',
	'galletas',
];

let mezcla = ensalada.concat(dulces);
// console.log('Esta es mi mezcla: ', mezcla);

//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

// console.log(
// 	'La posicion de los chetos de mi arreglo dulces: ',
// 	dulces.indexOf('chetos')
// );

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
// console.log(
// 	'La ultima posicion de las galletas es: ',
// 	dulces.lastIndexOf('galletas')
// );

//toString(): Nos permite convertir el array en una cadena de texto.
// console.log('Array en forma de string:\n', mezcla.toString());

//valueOf : Nos permite devolver el valor de nuestro arreglo.
// console.log('Los valores del arreglo son:', dulces.valueOf());

//includes(): Nos permite saber si un elemento existe o no dentro de un arreglo.
// console.log('Existe el elemento "gansitos"?', mezcla.includes('gansitos'));

// MÉTODOS REPETIDORES
// filter(): recorre el array y devuelve uno nuevo con los elementos que cumplan con la condición.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosMenor5 = numeros.filter((numero) => numero < 5);
console.log('Los números menores a 5 son: ', numerosMenor5);

const numeros6a9 = numeros.filter((n) => n > 5 && n < 10);
console.log('Los numeros del 6 al 9 son:', numeros6a9);

// map(): recorre el arreglo, modifica los elementos presentes en él y retorna esos valores modificados en uno nuevo con la misma longitud que el arreglo original

const map = numeros.map((n) => n * 3);
console.log('Arreglo multiplicado x 3:', map);

//tablas del 1  numeros
const tablas = {};
for (let i = 0; i < numeros.length; i++) {
	tablas[`del_${i + 1}`] = numeros.map((n) => n * (i + 1));
}
// console.log(tablas);

/* forEach(): Este método nos permite llamar a una función callback específica una vez por cada elemento sobre el que se itera del array. Al igual que otros iteradores como map o filter:

Parámetros:

	- Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteración:
	- Índice:
	- Arreglo objetivo: arreglo por el cual se está haciendo esta iteración

*/

// Ejemplo para remover el primer número impar de un arreglo
const lista = [3, 6, 8, 10, 12];
let impar = 3;

lista.forEach(function (n) {
	if (n === impar) {
		lista.shift();
	}
});

// console.log('Numeros restantes', lista);

/**Bucles o loops o ciclos
 *
 * En JS, son utilizados para realizar tareas repetititvas con base en una condición. Normalmente devuelcen un true o false al ser evaluadas. El bucle seguirá ejecutándose hasta que la condición devuelva un false.
 *
 * Existen:
 * 	- while
 * 	- do while
 * 	- for
 *
 * Variantes:
 * 	- for in
 * 	- for of
 *
 */

let valorInicial = 0;
while (valorInicial < 5) {
	valorInicial++;
	// console.log(valorInicial);
}

// ejercicio grupal

let valorLimite = prompt('Ingrese un numero entero positivo');
let nInicial = 1;

while (nInicial <= valorLimite) {
	console.log(nInicial);
	nInicial += 2;
}
//
// let numeroInicial = 1;

// let valorLimit = prompt(
// 	'Hola, por favor ingresa un numero entero positivo que sea el limite'
// );

// while (numeroInicial <= valorLimit) {
// 	//MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
// 	if (numeroInicial % 2 != 0) {
// 		//si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
// 		console.log(numeroInicial); //Imprimimos el valor de la variable
// 	}
// 	numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
// }

// do-while vs while, son la misma cosa

/**
 * FOR
 * Sirve para iterar sobre una seccion de una variable.
 *
 * valor inicial, contador, condiciones
 */
