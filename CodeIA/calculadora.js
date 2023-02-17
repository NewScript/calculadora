const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exitLetter = 'q'; // Letra de saída

function getInput() {
  rl.question('Qual operação você deseja realizar? (+, -, *, /) ou "' + exitLetter + '" para sair: ', (operation) => {
    const userInput = operation.trim();

    if (userInput === exitLetter) {
      console.log('Você saiu do programa.');
      rl.close();
      return;
    }

    if (userInput !== '+' && userInput !== '-' && userInput !== '*' && userInput !== '/') {
      console.log('Operação inválida.');
      getInput();
      return;
    }

    rl.question('Digite o primeiro valor: ', (firstValue) => {
      const firstNum = Number(firstValue.trim());

      if (isNaN(firstNum)) {
        console.log('Valor inválido.');
        getInput();
        return;
      }

      rl.question('Digite o segundo valor: ', (secondValue) => {
        const secondNum = Number(secondValue.trim());

        if (isNaN(secondNum)) {
          console.log('Valor inválido.');
          getInput();
          return;
        }

        let result;
        switch (userInput) {
          case '+':
            result = firstNum + secondNum;
            break;
          case '-':
            result = firstNum - secondNum;
            break;
          case '*':
            result = firstNum * secondNum;
            break;
          case '/':
            if (secondNum === 0) {
              console.log('Não é possível dividir por zero.');
              getInput();
              return;
            }
            result = firstNum / secondNum;
            break;
        }
        console.log(`O resultado de ${firstNum} ${userInput} ${secondNum} é: ${result}`);
        getInput();
      });
    });
  });
}

getInput();
