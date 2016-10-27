/*TODO:
    I can add, substract, multiply and divide at least two numbers,
    I can clear the input create a clear button, clear-all button,
    I can set a value for memory,
    I can chain aritmetic operations
    I can hit an equal button to show the result.
*/ 

var inputValues = [],
    memory = [],
    displayElement = $('#total'),
    numbers = $('#numbers a'),
    allowedOperators = ['+', '-', '*', '/', '.'],
    operators = $('#operators a');

numbers.click(function(event) {
    var value = event.currentTarget.text;
    if(value !== 'AC') {
        setInputValues(value);
        displayElement.text(joinInputValues());
    } else {
        clearMemory();
        clearInputValues();
        clearDisplay();
    }
});

operators.click(function(event) {
    var value = event.currentTarget.text;
    if(value === '=') {
        var result = eval(joinInputValues()),
            parsedResult = parseResult(result);

        displayElement.text(parsedResult);
        memory.push(parsedResult);
        clearInputValues();
    } else {
        setInputValues(value);
        displayElement.text(joinInputValues());
    }
});

function parseResult(value) {
    var regEx = /\./;
    return regEx.test(value) ? value.toFixed(2) : value;
}

function joinInputValues() {
    return getInputValues().join('');
}

function setInputValues(value) {
    isAnOperator = lastValueIsOperator(value);
    if (!isAnOperator) {
        inputValues.push(value);
    }
}

function lastValueIsOperator(value) {
    var lastValue = inputValues[inputValues.length - 1] || null;
    return allowedOperators.indexOf(value) > -1 ?
        lastValue === value || allowedOperators.indexOf(lastValue) > -1 :
        false;
}

function getInputValues() {
    return inputValues;
}

function clearInputValues() {
    inputValues = [];
    memory.length >= 1 ? inputValues.push(memory[memory.length -1]) : inputValues;
}

function clearMemory() {
    memory = [];
}

function clearDisplay() {
    displayElement.text('');
}
