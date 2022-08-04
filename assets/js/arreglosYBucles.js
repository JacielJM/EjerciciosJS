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

console.log(listaPerritos);

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
console.log(listaDelSuper);

console.log(`El producto en la posición 1 es: ${listaDelSuper[1]}`);
console.log(`El producto en la posición 4 es: ${listaDelSuper[4]}`);
console.log(`El producto en la posición 2 es: ${listaDelSuper[2]}`);
console.log(`El producto en la posición 6 es: ${listaDelSuper[6]}\n`);

for (let i = 0; i < listaPerritos.length; i++) {
	console.log(`El perrito en la posición ${i} es: ${listaPerritos[i]}`);
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

console.log(`La RAM de mi computadora es ${propiedadesComputadora.ram}`);

//Ejemplo de una Red Social
let publicacionRedSocial = {
	nombre: 'Felipe',
	usuario: '@felipecontenis',
	fecha: 'Agosto',
	likes: '5000',
	descripcion: 'Esta es una bonita foto de lasagna',
	ubicacion: 'Estado de Mexico',
};

console.log(
	'Estas son las publicaciones de Agosto: ',
	publicacionRedSocial.fecha
);

/*
Metodos de los arrays 

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elemenos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

Podemos dividir estos metodos en 3: 

    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos (spoiler)

*/
