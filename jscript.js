const rs = require("readline-sync");

function getOperation() {
    console.log(
        "enter the argument for the math operation that you want to perform IE +, -, *, / "
    );
    return (operator = rs.promptLoop(function (input) {
        if (input == "+" || input == "-" || input == "/" || input == "*") {
            console.log("successfully entered operation");
            return input === "+" || "-" || "/" || "*";
        } else {
            console.log("please enter correct js appropriate operator");
        }
    }));
}

function checkNumber(number1, number2) {
    while (true) {
        if (
            (!isNaN(number1 && number2) &&
                (number1 || number2) !== null &&
                number1.trim() !== "") ||
            number2.trim() !== ""
        ) {
            return parseFloat(number1, number2);
        } else {
            console.log("is not a number please enter a number");
        }
    }
}

function plus(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    answer = num1 + num2;
    return answer;
}

function minus(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    answer = num1 - num2;
    return answer;
}

function multiplication(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    answer = num1 * num2;
    return answer;
}

function division(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 / num2;
    return answer;
}

function performAction(operator, num1, num2) {
    if (operator === "+") {
        console.log(plus(num1, num2));
    }
    if (operator === "-") {
        console.log(minus(num1, num2));
    }
    if (operator === "/") {
        console.log(division(num1, num2));
    }
    if (operator === "*") {
        console.log(multiplication(num1, num2));
    }
}

function main() {
    let operator = getOperation();

    checkNumber(num1, num2);

    performAction(
        operator,
        rs.question("Please enter number 1: ", (num1 = rs.prompt())),
        rs.question("Please enter number 2: ", (num2 = rs.prompt()))
    );
}

main();
