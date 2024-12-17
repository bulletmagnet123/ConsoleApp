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

function checkNumber() {
    let number;

    while (true) {
        number = rs.question("Please enter a number: ");
        if (!isNaN(number) && number !== null && number.trim() !== "") {
            return parseFloat(number);
        } else {
            console.log("is not a number please enter a number");
        }
    }
}

function plus(num1, num2) {
    let num1plus = parseFloat(num1);
    let num2plus = parseFloat(num2);

    answer = num1plus + num2plus;
    return answer;
}

function minus(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    answer = num1 - num2;
    return answer;
}

function multiplication(num1, num2) {
    let one = parseFloat(num1);
    let two = parseFloat(num2);

    answer = one * two;
    return answer;
}

function division(num1, num2) {
    let first = parseFloat(num1);
    let second = parseFloat(num2);
    answer = first / second;
    return answer;
}

function performAction(operator) {
    if (operator === "+") {
        console.log("AH addition what would you like to add together?");
        let one = checkNumber();
        let two = checkNumber();
        console.log("The answer to your problem is = " + plus(one, two));
        console.log("Exiting");
        return;
    }
    if (operator === "-") {
        console.log(
            "AH subtraction what would you like to add subtract from what?"
        );
        let one = checkNumber();
        let two = checkNumber();
        console.log("The answer to your problem is = " + minus(one, two));
        console.log("Exiting");
        return;
    }
    if (operator === "/") {
        console.log(
            "AH division i was never good at this which is why i had a calculator in school. Anyways!"
        );
        let one = checkNumber();
        let two = checkNumber();
        console.log("The answer to your problem is = " + division(one, two));
        return;
    }
    if (operator === "*") {
        console.log("AH multiplication that was a good pick! now please: ");
        let one = checkNumber();
        let two = checkNumber();
        console.log(
            "The answer to your problem is = " + multiplication(one, two)
        );
        console.log("Exiting");
        return;
    }
}

let Operation = getOperation();

performAction(Operation);
