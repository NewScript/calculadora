export default function subtrair(valores){
    const firstValue = Number(valores[0]) 
    const secondValue = Number(valores[1])
    if(Number.isNaN(firstValue) || Number.isNaN(secondValue) ){
        throw new Error('Valor inválido')
        return
    }
    try {
        return firstValue - secondValue
    } catch (error) {
        throw new Error('Erro ao realizar a subtração');
    }
};