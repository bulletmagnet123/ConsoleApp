const rs = require("readline-sync");

const getValidNumber = (prompt) => {
    let num;
    while (true) {
        num = rs.question(prompt);
        if (!isNaN(num)) {
            return parseFloat(num);
        } else {
            console.log("Please enter a valid number.");
        }
    }
};

const getOperator = () => {
    const validOperators = ["+", "-", "*", "/"];
    while (true) {
        const operator = rs.question("Enter the operation (+, -, *, /): ");
        if (validOperators.includes(operator)) {
            return operator;
        } else {
            console.log("Invalid operator. Please enter a valid operator.");
        }
    }
};

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};

const performOperation = (operator, num1, num2) => {
    return operations[operator](num1, num2);
};

const main = () => {
    const operator = getOperator();

    const num1 = getValidNumber("Enter the first number: ");
    const num2 = getValidNumber("Enter the second number: ");

    const result = performOperation(operator, num1, num2);

    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
};

main();
