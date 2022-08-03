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

// factorial con arrow fn, error personalizad, operador ternario y recursión, esbellísmo.jpg
const factorialOfNumber = (number) =>
	number < 0 //primera condicion
		? (() => {
				throw new TypeError('No negative numbers please'); //si se cumple arroja este error
		  })()
		: number <= 1 //1er else evalua una segunda condicion para caso de corte
		? 1 //caso de corte para detener recursion, retorna 1
		: number * factorialOfNumber(number - 1); //2do else, llama a recursion
//
//
//
//
//
//clean code

const factorial = (n) =>
	n < 0
		? (() => {
				throw new TypeError('No negative numbers please');
		  })()
		: n <= 1
		? 1
		: n * factorial(n - 1);

// EXAMPLES
console.log(factorial(4));
factorial(8);
