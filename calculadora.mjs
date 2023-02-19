import operacoes from './operacoes.mjs';

let myArray = [500,5,48]

try {
    console.log(operacoes.dividir(myArray))
} catch (error) {
    console.error(error.message)
}