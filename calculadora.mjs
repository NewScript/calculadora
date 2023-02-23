import operacoes from './operacoes.mjs';

//--------------------------------------------------------

const viewCalculation = {
    calculationFormulation: document.getElementById('calculationFormulation'),
    numberPresentation: document.getElementById('numberPresentation')
};

// const action = {
//     allClear: document.getElementById('allClear'),
//     clear: document.getElementById('clear'),
//     backSpace: document.getElementById('backSpace')
// };

// const operator = {
//     sum: document.getElementById('sum'),
//     subtraction: document.getElementById('subtraction'),
//     division: document.getElementById('division'),
//     multiplication: document.getElementById('multiplication'),
//     result: document.getElementById('result')
// };

const operand = document.getElementsByClassName('operand');

const signalChange = document.getElementById('signalChange');

// const comma = document.getElementById('comma');

// //--------------------------------------------------------
// 

let numberOfCharactersAllowed = 10;

const Value = {
    signal: '',
    integer: '',
    coma: '',
    decimal: '',
    toString: function () {
        return `${signal}${integer}${coma}${decimal}`
    }
}

function maximumNumberOfCharactersAllowedReached() {
    let amountOfCharactersValueInteger = (Value.integer).toString().length;
    let amountOfCharactersValueDecimal = (Value.decimal).toString().length;
    let totalCaracters = amountOfCharactersValueInteger + amountOfCharactersValueDecimal;
    return totalCaracters >= numberOfCharactersAllowed ? true : false;
}

function addDotBackwards(str) {
    let reversedStr = str.split('').reverse().join(''); // inverte a string
    let result = reversedStr.replace(/(\d{1,3})/g, '$1.').split('').reverse().join(''); // adiciona um ponto a cada 3 dígitos
    if (result.charAt(0) === '.') { // remove ponto adicional adicionado no início da string
      result = result.slice(1);
    }
    return result;
  }

function presentNumber() {
    const valueTemp = addDotBackwards(Value.integer)
    viewCalculation.numberPresentation.textContent = 
        `${Value.signal}${valueTemp}${Value.coma}${Value.decimal}`;
}

function includeNumber(btnClicked) {
    const numberClicked = btnClicked.target.innerHTML;
    if (!maximumNumberOfCharactersAllowedReached()) {
        if (Value.coma === '') {
            Value.integer = Value.integer + numberClicked
            presentNumber();
        } else {
            Value.decimal = Value.decimal + numberClicked;
            presentNumber();
        }
    } else {
        alert('Número máximo de caracteres permitidos alcançado');
    }
};


function changeSign() {
    switch(Value.signal){
        case '':
            Value.signal = '-'
        break
        case '-':
            Value.signal = '+'
        break
        case '+':
            Value.signal = '-'
        break 
    }
    // console.log(Value.signal)
    presentNumber();
}

function includeComa() {
    Value.coma = ','
    presentNumber();
};




//--------------------------------------------------------


for (const iterator of operand) {
    iterator.addEventListener('click', includeNumber);
};

signalChange.addEventListener('click', changeSign);

comma.addEventListener('click', includeComa);

//--------------------------------------------------------


// Value.integer = '35'
// Value.decimal = '48'

// console.log(maximumNumberOfCharactersAllowedReached())



// const teste = new Value();

// teste.integer = 12343
// teste.decimal = 344


// console.log(teste.toString())



// let myArray = [500,'pp']

// try {
//     console.log(operacoes.subtrair(myArray))
// } catch (error) {
//     console.log(error)
// }