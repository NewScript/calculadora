export default function multiplicar(valores){
    let result = 1 // Iniciar com zero o resultado sempre sera zero
    try {
        valores.forEach(valor => {
            valor = Number(valor)
            result *= Number(valor)
        });
    } catch (error) {
        throw new Error("Ocorreu um erro ao multiplicar os valores: " + error.message);
    }
    return result.toFixed(10); // Return em string
};