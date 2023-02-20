const divisaoPorZero = {mensagem: 'Não é possivel divisao por zero'};
// const ErroTipo2 = {mensagem: 'Ocorreu um erro do tipo 2'};
// const ErroTipo3 = {mensagem: 'Ocorreu um erro do tipo 3'};

export default function dividir(valores){
    const firstValue = valores[0]
    const secondValue = valores[1]

    if(secondValue == 0){
        throw new Error(divisaoPorZero.mensagem)
        return
    }

    return valores[0] / valores[1]
};

export {divisaoPorZero}