import operacoes from './operacoes.mjs';

let myArray = [500,'pp']

try {
    console.log(operacoes.subtrair(myArray))
} catch (error) {
    console.log(error)
}