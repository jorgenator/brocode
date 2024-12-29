let display = document.getElementById('display');

function clearDisplay() {
    display.value = '0.00';
}

function appendToDisplay(number) {
    if (display.value === '0.00') {
        display.value = ''; 
    }
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        if (display.value === 'Infinity') {
            display.value = 'Error';
            throw new Error('Division by zero');
        }
    } catch (e) {
        display.value = 'Error';
    }
}