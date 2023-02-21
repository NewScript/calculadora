export default function dividir(valores){
    const firstValue = Number(valores[0]) 
    const secondValue = Number(valores[1])
    if(secondValue == 0){
        throw new Error('Não é possivel divisao por zero')
        return
    }
    if(Number.isNaN(firstValue) || Number.isNaN(secondValue) ){
        throw new Error('Valor inválido')
        return
    }
    try {
        return firstValue / secondValue
    } catch (error) {
        throw new Error('Erro ao realizar a divisão')
    }
};