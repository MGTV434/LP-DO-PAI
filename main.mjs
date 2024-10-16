// importando as funçães dos módulos
import { soma } from "./soma.mjs";
import { multiplicar } from "./multiplicar.mjs";

// utilizando as funçãoes importadas
const numero1 = 5;
const numero2 = 3;

const resultadoSoma = soma(numero1, numero2);
const resultadoMulplicacao = multiplicar(numero1, numero2);

console.log("${numero1} + ${numero2} = ${resultadoSoma}");
console.log("${numero1} * ${numero2} = ${resultadoMultiplicacao}");
