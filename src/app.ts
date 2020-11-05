var readlineSync = require('readline-sync');

console.log('Calculadora de Bháskara');
console.log('O formato considerado para cálculo é ax²+bx+c');
var a = Number(readlineSync.question('Digite o valor de a: '));
var b = Number(readlineSync.question('Digite o valor de b: '));
var c = Number(readlineSync.question('Digite o valor de c: '));
console.log('A expressão que será calculada é: ' + a + 'x²+' + b + 'x+' + c);
var delta = Math.pow(b, 2) - 4 * a * c;
if (delta > 0) {
  console.log('A equação tem 2 raízes reais e diferentes.');
} else if (delta === 0) {
  console.log('A equação tem 2 raízes reais e iguais.');
} else {
  console.log('A equação não possui raízes reais.');
  process.exit();
}
var x1 = (-b + Math.sqrt(delta)) / (2 * a);
var x2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log('A primeira raíz da equação é: ' + x1);
console.log('A segunda raíz da equação é: ' + x2);
