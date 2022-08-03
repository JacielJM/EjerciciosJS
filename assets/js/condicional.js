// Comparación simple
const nineros = false;
const hambre = true;

alert(nineros == hambre); // false
alert(nineros || hambre); // true

// AND
// Todas las condiciones deben ser true
// true && true  => true
// true  && false => false
// false && false => false

// OR
// Al menos una condicion debe ser true
// true || true = true
// true || false = true
// false || false = false

// NOT
// Es la negación a la condición
// true => false, false => true

var hora = 8;

if (hora == 8) {
	console.log('Buen dia');
}

var hora = 3;

if (hora != 8) {
	console.log('Buen dia');
}

var hungry = false;

if (hungry == true) {
	alert('Tengo mal del porky');
} else {
	alert('Two mimir');
}

var edad = 21;

if (edad >= 18) {
	alert('Crear cuenta');
} else {
	alert('bai bai');
}
