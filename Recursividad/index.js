// Estructura de una funcion recursiva

// function recursiva() {
//   if (/*validacion*/) {
//     // Llamados recursivos
//   }  else {
//     // Llamados normales, sin recursividad
//   }
// }

// let numerito = 0;

// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
// }

const numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function recursiva(numbersArray) {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);
    numbersArray.shift();
    console.log(numeritos);
    recursiva(numbersArray);
  }
}

recursiva(numeritos);
