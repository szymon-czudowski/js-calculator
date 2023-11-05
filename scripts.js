let display = document.querySelector(".input-values");
let input = "";
let operator = "";
let result = null;

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btnPlus = document.getElementById("btn-plus");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btnMinus = document.getElementById("btn-minus");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btnMultiply = document.getElementById("btn-multiply");
const btn0 = document.getElementById("btn-0");
const btnClear = document.getElementById("btn-clear");
const btnEqual = document.getElementById("btn-equal");
const btnDivide = document.getElementById("btn-divide");

function appendToInputValues(value) {
    if (result !== null) {
        input = result;
        result = null;
    }
    input += value;
    display.value = input;
}

function appendOperator(op) {
    if (result !== null) {
        input = result;
        result = null;
    }
    operator = op;
    appendToInputValues(op);
}

function clearInput() {
    input = "";
    operator = "";
    display.value = "";
    result = null;
}

function calculateResult() {
    if (operator === "" || input.endsWith(operator)) {
        display.value = "Invalid Input";
        return;
    }

    const parts = input.split(operator);
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[1]);

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            result = "Can not divide by 0";
        } else {
            result = num1 / num2;
        }
    }

    display.value = result;
}

btn1.addEventListener("click", () => appendToInputValues('1'));
btn2.addEventListener("click", () => appendToInputValues('2'));
btn3.addEventListener("click", () => appendToInputValues('3'));
btnPlus.addEventListener("click", () => appendOperator('+'));
btn4.addEventListener("click", () => appendToInputValues('4'));
btn5.addEventListener("click", () => appendToInputValues('5'));
btn6.addEventListener("click", () => appendToInputValues('6'));
btnMinus.addEventListener("click", () => appendOperator('-'));
btn7.addEventListener("click", () => appendToInputValues('7'));
btn8.addEventListener("click", () => appendToInputValues('8'));
btn9.addEventListener("click", () => appendToInputValues('9'));
btnMultiply.addEventListener("click", () => appendOperator('*'));
btn0.addEventListener("click", () => appendToInputValues('0'));
btnClear.addEventListener("click", () => clearInput());
btnEqual.addEventListener("click", () => calculateResult());
btnDivide.addEventListener("click", () => appendOperator('/'));
