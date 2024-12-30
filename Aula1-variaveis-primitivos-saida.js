console.log('Olá, Mundo!');

var nome = "Alex"; //Var pode mudar o valor e pode ser acessado de qualquer lugar | Tipo String cadeia de caracteres entre aspas simples ou duplas
let idade = 31; //Let pode mudar o valor, mas é acessada apenas no local onde foi declarada | Tipo Number pode ser inteiro ou com ponto flutuante
let gostaDe = 'Programação'; //String com aspas simples
const MASCULINO = true; // Const não muda o valor, só é acessada onde foi declarada, e precisa declarar já com o valor | Tipo Boolean só recebe verdadeiro ou falso

console.log(`Olá, eu sou: ${nome}, tenho: ${idade + 1} anos, gosto de: ${gostaDe}. Sexo Masculino: ${MASCULINO}.`); //Template String interpola String com variáveis, declara com crases

gostaDe = 'Astronomia'; //Redeclarando valor de variável
console.log(`Olá, eu sou: ${nome}, tenho: ${idade + 1} anos, gosto de: ${gostaDe}. Sexo Masculino: ${MASCULINO}.`); //Template String interpola String com variáveis, declara com crases