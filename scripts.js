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

