"use strict";
function saludar(nombre) {
    // console.log(`¡Hola, ${nombre}!`);
}
saludar('Mundo');
// ------------------------------------
function suma(a, b) {
    const resultado = a + b;
    // console.log (`La suma de ${a} y ${b} es ${resultado}`);
    return resultado;
}
suma(2, 3);
// -------------------------------------------
function sumArray(arr) {
    const suma = arr.reduce((acc, curr) => acc + curr, 0);
    // console.log(`La suma de los elementos en el arrgelo ${arr} es :  ${suma}`);
    return suma;
}
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
function nombress(persona) {
    const nombres = persona.map((pers) => pers.nombre);
    // console.log(`Los nombres en el arreglo de persona son: ${nombres}`);
    return nombres;
}
nombress([{ nombre: 'Lucas', edad: 30 }, { nombre: 'Joan', edad: 33 }]);
function filtrar(arr, referencia) {
    const numerosFiltrados = arr.filter((num) => num > referencia);
    // console.log(`Los numeros mayores que ${referencia} en el ${arr} son ${numerosFiltrados}`)
    return numerosFiltrados;
}
filtrar([1, 2, 3, 4, 5,], 2);
// -------------------------------------------
function negacion(valor) {
    return !valor;
}
const resultado = negacion(true);
// console.log(resultado)
// ---------------------------------------------
function multiplicar(arr) {
    return arr.map((num) => num * 2);
}
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayMultiplicado = multiplicar(original);
// console.log("El doble del array es:"  + arrayMultiplicado)
// -----------------------------------------------
function separar(numeros) {
    const pares = [];
    const impares = [];
    for (const num of numeros) {
        if (num % 2 === 0) {
            pares.push(num);
        }
        else {
            impares.push(num);
        }
    }
    return [pares, impares];
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [pares, impares] = separar(numeros);
console.log("Números Pares: ", pares);
console.log("Números Impares: ", impares);
