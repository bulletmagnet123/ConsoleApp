const rs = require("readline-sync");
let num1, num2;

function getOperation() {
    console.log(
        "Enter the argument for the math operation that you want to perform (e.g., +, -, *, /):"
    );
    let operator;
    while (true) {
        operator = rs.question();
        if (
            operator === "+" ||
            operator === "-" ||
            operator === "/" ||
            operator === "*"
        ) {
            console.log("Successfully entered operation");
            return operator;
        } else {
            console.log("Please enter a valid JS operator.");
        }
    }
}

function checkNumber(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return [parseFloat(num1), parseFloat(num2)];
    } else {
        console.log(
            "One of the inputs is not a number. Please enter valid numbers."
        );
        return null;
    }
}

function plus(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let answer = num1 + num2;
    return answer;
}

function minus(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let answer = num1 - num2;
    return answer;
}

function multiplication(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let answer = num1 * num2;
    return answer;
}

function division(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let answer = num1 / num2;
    return answer;
}

function performOperation(operator, num1, num2) {
    let numbers = checkNumber(num1, num2);
    if (!numbers) return;

    num1 = numbers[0];
    num2 = numbers[1];

    let result;
    if (operator === "+") {
        result = plus(num1, num2);
    } else if (operator === "-") {
        result = minus(num1, num2);
    } else if (operator === "/") {
        result = division(num1, num2);
    } else if (operator === "*") {
        result = multiplication(num1, num2);
    }

    console.log(result);
}
function main() {
    const operator = getOperation();
    console.log("Enter the first number:");
    let num1 = rs.question();
    console.log("Enter the second number:");
    let num2 = rs.question();

    const numbers = checkNumber(num1, num2);
    if (numbers) {
        const result = performOperation(operator, numbers[0], numbers[1]);
    }
}

main();
