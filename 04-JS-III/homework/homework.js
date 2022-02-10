// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array.shift();
}

function devolverUltimoElemento(array) {
  return array.pop();
}

function obtenerLargoDelArray(array) {
  return array.length;
}

function incrementarPorUno(array) {
  let lista = array.map((item) =>
    Math.round(item) === item ? (item += 1) : item
  );
  return lista;
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  let lista = palabras.reduce((acc, item, index) => {
    if (index != palabras.length - 1) {
      acc += item + " ";
    } else {
      acc += item;
    }
    return acc;
  }, "");
  return lista;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = numeros.reduce(
    (acc, item) => (acc = Math.round(item) === item ? (acc += item) : acc),
    0
  );
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros);
}

function multiplicarArgumentos() {
  let resultado = 1;
  for (item of arguments) {
    resultado *= item;
  }
  return arguments.length > 1
    ? resultado
    : arguments.length === 1
    ? arguments[0]
    : 0;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayores = arreglo.reduce(
    (acc, item) => (acc = item > 18 ? (acc += 1) : acc),
    0
  );
  return mayores;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  return numeroDeDia === 1 || numeroDeDia === 7
    ? "Es fin de semana"
    : "Es dia Laboral";
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n = n.toString();
  return n[0] === "9" ? true : false;
}

function todosIguales(arreglo) {
  return arreglo.every((item) => item === arreglo[0]);
}

function mesesDelAño(array) {
  let resultados = array.filter(item => item == "Marzo" || item == "Noviembre" || item == "Enero");
  return resultados.length >= 3 ? resultados : "No se encontraron los meses pedidos" ;
}

function mayorACien(array) {  
  return array.filter((item) => item > 100);
}

function breakStatement(numero) {
  let resultados = [];

  for (let i = 1; i <= 10; i++) {
    if (numero !== i) {
      numero += 2;
      resultados.push(numero);
    } else {
      return "Se interrumpió la ejecución";
      break;
    }
  }
  return resultados;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let resultados = [];

  for (let i = 1; i <= 10; i++) {
    if (i !== 5) {
      numero += 2;
      resultados.push(numero);
    } else {  
      continue;
    }
  }
  return resultados;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
