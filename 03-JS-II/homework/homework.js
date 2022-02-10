// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  return x > y ? x : x === y ? x || y : y;
}

function mayoriaDeEdad(edad) {
  return edad >= 18 ? "Allowed" : "Not allowed";
}
  
function conection(status) {
  return status === 1 ? "Online" : status === 2 ? "Away" : "Offline";
}

function saludo(idioma) {
  return idioma == "aleman" ? "Guten Tag!" : idioma == "mandarin" ? "Ni Hao!" : idioma == "ingles" ? "Hello!" : "Hola!";
}

function colors(color) {
  return color == "blue" ? "This is blue" : color == "red" ?  "This is red" : color == "green" ? "This is green" : color  == "orange" ? "This is orange" : "Color not found";
}

function esDiezOCinco(numero) {
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  return numero > 20 && numero < 50;
}

function esEntero(numero) {
  return Math.round(numero) === numero;
}

function fizzBuzz(numero) {
  return numero % 3 === 0 && numero % 5 === 0 ? "fizzbuzz" : numero % 3 === 0 ? "fizz" : numero % 5 === 0 ? "buzz" : numero;
}

function operadoresLogicos(num1, num2, num3) {
  return  num1 < 0 || num2 < 0 || num3 < 0 ? "Hay negativos" : num1 > num2 && num1 > num3 && num1 > 0 ? "Número 1 es mayor y positivo" :num3 > num1 && num2 ? num3 += 1 : num1 === 0 || num2 === 0 || num3 === 0 ? "Error" : false;
}

function esPrimo(numero) {
  let cont = 2;

  if(numero === 0 || numero === 1){
    return false;
  }

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      cont++;
    }
  }  
  return cont === 2;
}

function esVerdadero(valor){
  return valor ? "Soy verdadero" : "Soy falso";
}

function tablaDelSeis(){
  let resultados = [];
  for(let i = 0; i <= 10; i++){
    resultados.push(6*i);
  }
  return resultados;
}

function tieneTresDigitos(numero){
  numero = numero.toString();
  return numero.length === 3;
}

function doWhile(numero) {
  let limite = 1;
  do{
    numero += 5;
    limite++;
  }while(limite <= 8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
