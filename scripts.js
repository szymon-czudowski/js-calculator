
let display = document.querySelector(".inputValues");
let input = "";
let operator = "";

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnPlus = document.getElementById("btnPlus");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btnMinus = document.getElementById("btnMinus");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnMultiply = document.getElementById("btnMultiply");
const btn0 = document.getElementById("btn0");
const btnClear = document.getElementById("btnClear");
const btnEqual = document.getElementById("btnEqual");
const btnDivide = document.getElementById("btnDivide");

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
btnClear.addEventListener("click", () => clearInput('C'));
btnEqual.addEventListener("click", () => calculateResult('='));
btnDivide.addEventListener("click", () => appendOperator('/'));