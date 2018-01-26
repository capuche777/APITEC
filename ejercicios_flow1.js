//Ejercicio1

var var1 = Number(prompt(`Asigna un valor a la variable "var1"`));
var var2 = Number(prompt(`Asigna un valor a la variable "var2"`));
var var3 = Number(prompt(`Asigna un valor a la variable "var3"`));

var max = alert('El número más grande es:\n ' + Math.max(var1,var2,var3));

//Ejercicio2

var adivina = Math.floor(Math.random() * 10) + 1;

var adivinanza = prompt('Ingresa un número del 1 al 10');

var resp = adivinanza;

if (adivina === adivinanza) {
    alert('Adivinaste!!');
} else {
    alert('Suerte a la proxima, el número es ' + adivina);
}

//Ejercicio3

var pares = prompt('Ingresa un número');
var parResp = pares;

if (parResp % 2 === 0) {
    alert('Has ingresado un numero par');
} else {
    alert('Has ingresado un numero impar');
}

//Ejercicio4

var edadP = Number(prompt('Ingresa tu edad'));
var resP = (edadP)

if (resP <= 21 ) {
    alert('Tu edadd en años perro ' + resP / 10.5);
} else{
    alert('Tu edadd en años perro ' + resP / 7);
}

//Ejercicio5
var letra = prompt('Por favor ingresa una letra');
var respL = letra;

if (respL === 'a' || respL === 'e' || respL === 'i' || respL === 'o' || respL === 'u' || respL === 'A' || respL === 'E' || respL === 'I' || respL === 'O' || respL === 'U') {
    alert('Ingresaste una vocal');
} else {
    alert('Ingresaste una consonante');
}

//Ejercicio6 <===
var elemento = prompt('De que elemento quieres saber el estado:\n Agua, CO2 o Hierro');
var temperatura = Number(prompt('Ingresa la temperatura en grados'));
elemento;
temperatura;

if (elemento === 'agua' || elemento === 'Agua' && temperatura > 0) {
     alert('El agua está en estado sólido');
} else if (elemento === 'agua' || elemento === 'Agua' && temperatura <= 100) {
     alert('El agua está en estado líquido');
} else if (elemento === 'agua' || elemento === 'Agua' && temperatura > 100) {
     alert(`El agua está en estado "Gaseoso"`);
}

//Ejercicio7
var var1 = Number(prompt(`Asigna un valor a la variable "var1"`));
var var2 = Number(prompt(`Asigna un valor a la variable "var2"`));
var var3 = Number(prompt(`Asigna un valor a la variable "var3"`));

if (var1 === var2 && var2 === var3) {
    alert('Triangulo Equilatero');
} else if (var1 !== var2 && var2 === var1 || var1 === var2 && var2 !== var3) {
    alert('Triangulo Isóscoles');
}