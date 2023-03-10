import operacoes from './operacoes.mjs';

//--------------------------------------------------------

const viewCalculation = {
    calculationFormulation: document.getElementById('calculationFormulation'),
    numberPresentation: document.getElementById('numberPresentation')
};

const action = {
    allClear: document.getElementById('allClear'),
    clear: document.getElementById('clear'),
    backSpace: document.getElementById('backSpace')
};

const operator = {
    sum: document.getElementById('sum'),
    subtraction: document.getElementById('subtraction'),
    division: document.getElementById('division'),
    multiplication: document.getElementById('multiplication'),
    result: document.getElementById('result')
};

const operand = document.getElementsByClassName('operand');

const signalChange = document.getElementById('signalChange');

const comma = document.getElementById('comma');

//--------------------------------------------------------

let numberOfCharactersAllowed = 10;

let formattedNumbers = ''

const values = []

const Value = {
    signal: '',
    integer: '',
    comma: '',
    decimal: '',
    operator: ''
}

//--------------------------------------------------------

function storeValues(){
    values.push(formattedNumbers)
    console.log(values)
}

function clear(){
    Value.signal = ''
    Value.integer = ''
    Value.comma = ''
    Value.decimal = ''
    presentNumber()
    viewCalculation.numberPresentation.innerText = '0';
}

function clearAll(){
    clear();
    viewCalculation.calculationFormulation.textContent = '0'
}

function maximumNumberOfCharactersAllowedReached() {
    let amountOfCharactersValueInteger = (Value.integer).toString().length;
    let amountOfCharactersValueDecimal = (Value.decimal).toString().length;
    let totalCaracters = amountOfCharactersValueInteger + amountOfCharactersValueDecimal;
    return totalCaracters >= numberOfCharactersAllowed ? true : false;
}

function addDotBackwards(str) {
    let reversedStr = str.split('').reverse().join(''); // inverte a string
    let result = reversedStr.replace(/(\d{1,3})/g, '$1.').split('').reverse().join(''); // adiciona um ponto a cada 3 d??gitos
    if (result.charAt(0) === '.') { // remove ponto adicional adicionado no in??cio da string
      result = result.slice(1);
    }
    return result;
  }

function presentNumber() {
    const valueTemp = addDotBackwards(Value.integer)
    viewCalculation.numberPresentation.textContent = 
        `${Value.signal}${valueTemp}${Value.comma}${Value.decimal}`;
        // console.log(`${Value.signal}${Value.integer}${Value.comma}${Value.decimal}`)
        formattedNumbers = viewCalculation.numberPresentation.textContent
}

function includeNumber(btnClicked) {
    const numberClicked = btnClicked.target.innerHTML;
    if (!maximumNumberOfCharactersAllowedReached()) {
        if (Value.comma === '') {
            Value.integer = Value.integer + numberClicked
            presentNumber();
        } else {
            Value.decimal = Value.decimal + numberClicked;
            presentNumber();
        }
    } else {
        alert('N??mero m??ximo de caracteres permitidos alcan??ado');
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

function includeComma() {
    Value.comma = ','
    presentNumber();
};

function bsPresentNumber(){
    
    let indexOfTheCharacterToBeDeleted = ((viewCalculation.numberPresentation.textContent).length - 1);
    let letterToErase = viewCalculation.numberPresentation.textContent.charAt(indexOfTheCharacterToBeDeleted);
    viewCalculation.numberPresentation.textContent = (viewCalculation.numberPresentation.textContent).slice(0, indexOfTheCharacterToBeDeleted);
    
    if(indexOfTheCharacterToBeDeleted === 0){
        viewCalculation.numberPresentation.textContent = '0';
    };

    if(letterToErase != ',' || letterToErase != '-' || letterToErase != '.'){
        bsStoreNumber();
    }

    if(letterToErase === ','){
        Value.comma = '';
    };
    if(letterToErase === '-'){
        Value.signal = '';
    };

};

function bsStoreNumber(){
    if(Value.comma){
        Value.decimal = Value.decimal.slice(0, Value.decimal.length - 1);
        // console.log('Decimal = ' + $strDecimal + ' - ' + $strDecimal.length);
    }else{
        Value.integer = Value.integer.slice(0, Value.integer.length - 1);
        // console.log('Integer = ' + $strInteger + ' - ' + $strInteger.length);
    };
};

function presentFormulation(e){
    if(viewCalculation.calculationFormulation.textContent === '0'){
        viewCalculation.calculationFormulation.textContent = '';
    }
    if(Value.integer != ''){
        viewCalculation.calculationFormulation.textContent += `${formattedNumbers} ${e.target.textContent} `;
        storeValues()
        clear();
    }
    viewCalculation.numberPresentation.innerText = '0';
};

//--------------------------------------------------------


for (const iterator of operand) {
    iterator.addEventListener('click', includeNumber);
};

signalChange.addEventListener('click', changeSign);

comma.addEventListener('click', includeComma);

action.clear.addEventListener('click', clear);

action.allClear.addEventListener('click', clearAll)

action.backSpace.addEventListener('click', bsPresentNumber);

operator.sum.addEventListener('click', presentFormulation);

operator.subtraction.addEventListener('click', presentFormulation);

operator.division.addEventListener('click', presentFormulation);

operator.multiplication.addEventListener('click', presentFormulation);

//--------------------------------------------------------
