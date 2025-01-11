//Média aritmética

let nota1 = 10;
let nota2 = 5.5;
let nota3 = 8.3;

let media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(1));

//Média ponderada 1ª nota vale 6, segunda vale 4

let notaPonderada1 = 8.3;
let notaPonderada2 = 5.6;

const PESO1 = 6;
const PESO2 = 4;

let mediaPonderada = ((notaPonderada1 * PESO1) + (notaPonderada2 * PESO2)) / (PESO1 + PESO2);
console.log(mediaPonderada.toFixed(1));

//Calcular idade baseado no ato atual
let time = new Date;
let anoAtual = time.getFullYear();

let anoNascimento = 1993;

console.log(`Sua idade atual é: ${anoAtual - anoNascimento} anos`);

//Conversor real x dolar
let valorEmReais = 1300;
const valorDolar = 6.03;

let valorConvertido = valorEmReais / valorDolar;
console.log(`Valor recebido em dólar: U$${valorConvertido.toFixed(2).replace('.', ',')}`);