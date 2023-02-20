import somar from "./somar.mjs";
import subtrair from "./subtrair.mjs";
import dividir from "./dividir.mjs";
import multiplicar from "./multiplicar.mjs";
import { divisaoPorZero } from "./dividir.mjs";

const operacoes = {
    somar,
    subtrair,
    dividir,
    multiplicar
}

export default operacoes
export {divisaoPorZero}