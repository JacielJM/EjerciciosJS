// EJERCICIOS

// EJERCICIO 1
function idCard() {
	let nombre = 'Jaciel';
	let ubicacion = 'Puerto Escondido';
	let pasatiempo = 'ciclismo';
	return `Hola mi nombre es ${nombre}. Vivo en ${ubicacion} y disfruto el ${pasatiempo}.`;
}

console.log(idCard());

// Ejercicio 2
function calcDogAge(dogName = 'tu perro', humanYears = NaN) {
	let dogEq = 7;
	let dogYears = humanYears * dogEq;
	return `La edad de ${dogName} es ${dogYears} años perrunos`;
}

console.log(calcDogAge('Chester', 7));
console.log(calcDogAge());

// arrow fn
const dogAge = (dogName, humanYears) =>
	`${dogName} tiene ${humanYears * 7} años perrunos`;
console.log(dogAge('Wisin', 5));

// OBJETOS
const Conejo = {
	nombre: 'Griselo',
	edad: 27,
	color: 'gris',
	peso: 500,
};
