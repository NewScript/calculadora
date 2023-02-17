const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exitLetter = 'q'; // Letra de saída

function getInput() {
  rl.question('Digite algo ou "' + exitLetter + '" para sair: ', (answer) => {
    const userInput = answer.toLowerCase().trim();
    if (userInput === exitLetter) {
      console.log('Você saiu do programa.');
      rl.close();
    } else {
      console.log(`Você digitou: ${userInput}`);
      getInput();
    }
  });
}

getInput();