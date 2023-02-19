export default function subtrair(valores){
    let result = 0
    try {
        valores.forEach(valor => {
            valor = Number(valor)
            result -= Number(valor)
        });
    } catch (error) {
        throw new Error("Ocorreu um erro ao subtrair os valores: " + error.message);
    }
    return result.toFixed(10); // Return em string
};