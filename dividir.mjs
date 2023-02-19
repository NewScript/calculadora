export default function dividir(valores){
    let result = 1 // Iniciar com zero o resultado sempre sera zero
    try {
        valores.forEach(valor => {
            valor = Number(valor)
            if (valor === 0) {
                throw new RangeError("Não é possível dividir por zero.");
            }
            result /= valor
        });
    } catch (error) {
        if (error instanceof RangeError) {
            throw new Error(error.message);
        } else {
            throw new Error("Ocorreu um erro ao dividir os valores: " + error.message);
        }
    }
    return result.toFixed(10); // Return em string
};