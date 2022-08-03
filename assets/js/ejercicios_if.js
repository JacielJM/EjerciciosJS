//
//ejercicio 1
function esPar(numero) {
	if (numero && numero != 0) {
		if (numero % 2 == 0) {
			return `El número ${numero} es par`;
		}
		return `El número ${numero} es impar`;
	}
	console.log('Por favor ingrese un número válido');
}

console.log(esPar(18));
console.log(esPar(5));
console.log(esPar(-23));
console.log(esPar(-24));
console.log(esPar(0));
console.log(esPar());
//
//
//
//
//
//
//
console.log(`\n`);

//ejercicio 2
function esMayorDeEdad(birthYear) {
	let today = new Date();
	let edad = today.getFullYear() - birthYear;
	if (birthYear && edad != 0) {
		if (edad >= 18) {
			return 'Es mayor de edad';
		}
		return 'No es mayor de edad';
	}
	console.log('Por favor ingrese un año válido');
}

console.log(esMayorDeEdad(2003));
console.log(esMayorDeEdad(2005));
console.log(esMayorDeEdad(0));
console.log(esMayorDeEdad());
