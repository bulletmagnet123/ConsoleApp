const rs = require("readline-sync");
let performOperations;

function getOperation(argument) {
    let correctArg = false;
    while (correctArg == false) {
        if (
            argument == "+" ||
            argument == "-" ||
            argument == "/" ||
            argument == "*"
        ) {
            console.log("successfully entered operation");
            correctArg = true;
            return argument;
        } else {
            console.log("please enter correct js appropriate operator");
            correctArg = false;
        }
        var newArgument = rs.question("enter new correct, math argument");
        if (
            newArgument == "+" ||
            newArgument == "-" ||
            newArgument == "/" ||
            newArgument == "*"
        ) {
            console.log("successfully entered operation");
            correctArg = true;
            return newArgument;
        } else {
            console.log("please enter correct js appropriate operator");
            correctArg = false;
        }
    }
}

function isitanumber() {
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

performOperations = true;

function plus(num1, num2) {
    let num1plus = parseFloat(num1);
    let num2plus = parseFloat(num2);

    answer = num1plus + num2plus;
    return answer;
}

function minus(main, minus) {
    let num1 = parseFloat(main);
    let num2 = parseFloat(minus);

    answer = num1 - num2;
    return answer;
}

function multiplication(first, second) {
    let one = parseFloat(first);
    let two = parseFloat(second);

    answer = one * two;
    return answer;
}

function division(one, two) {
    let first = parseFloat(one);
    let second = parseFloat(two);
    answer = first / second;
    return answer;
}

function performAction(GetOperation) {
    if (GetOperation == "+") {
        console.log("AH addition what would you like to add together?");
        var one = isitanumber();
        var two = isitanumber();
        console.log("The answer to your problem is = " + plus(one, two));
        performOperations == false;
        console.log("Exiting");
        return;
    }
    if (GetOperation == "-") {
        console.log(
            "AH subtraction what would you like to add subtract from what?"
        );
        var one = isitanumber();
        var two = isitanumber();
        console.log("The answer to your problem is = " + minus(one, two));
        performOperations == false;
        console.log("Exiting");
        return;
    }
    if (GetOperation == "/") {
        console.log(
            "AH division i was never good at this which is why i had a calculator in school. Anyways!"
        );
        var one = isitanumber();
        var two = isitanumber();
        console.log("The answer to your problem is = " + division(one, two));
    }
    if (GetOperation == "*") {
        console.log("AH multiplication that was a good pick! now please: ");
        var one = isitanumber();
        var two = isitanumber();
        console.log(
            "The answer to your problem is = " + multiplication(one, two)
        );
        performOperations == false;
        console.log("Exiting");
        return;
    }
}
var userName = rs.question("what is your name? ");
var argument = rs.question(
    "enter the argument for the math operation that you want to perform IE +, -, *, /"
);

getOperation(argument);

performAction(argument);
