import operacoes from './operacoes.mjs';
import { divisaoPorZero} from './operacoes.mjs'


let myArray = [500,0]

// try {
//     console.log(operacoes.dividir(myArray))
// } catch (error) {
//     console.error(error.message)
// }

try {
    operacoes.dividir(myArray)
} catch (error) {
    if (error.message === divisaoPorZero.mensagem) {
        console.error(divisaoPorZero.mensagem);
    }
}



// console.log(operacoes.dividir(myArray))