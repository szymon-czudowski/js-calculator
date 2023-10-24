let display = document.querySelector(".inputValues");
let input = "";
let operator = "";

function appendToInputValues (value) {
    input += value;
    display.value = input;
}

function appendOperator(op) {
    operator = op;
    appendToInputValues(op);
}

function clearInput() {
    input = "";
    operator = "";
    display.value = "";
}

function calculateResult() {
    const parts = input.split(operator);
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[1]);

    if (operator === "+") {
        display.value = num1 + num2;
    } else if ( operator === "-") {
        display.value = num1 - num2;
    } else if ( operator === "*") {
        display.value = num1 * num2;
    } else if ( operator === "/") {
        if ( num2  === 0 ) {
            display.value = "Can not divide by 0";
        } else {
            display.value = num1 / num2;
        }
    }
}