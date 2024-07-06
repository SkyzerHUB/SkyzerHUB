let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function appendNumber(number) {
    if (display.innerText === '0' && number !== '.') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    let lastChar = display.innerText.slice(-1);
    if (!['+', '-', '*', '/'].includes(lastChar)) {
        display.innerText += operator;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}