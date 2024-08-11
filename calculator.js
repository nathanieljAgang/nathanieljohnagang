$(document).ready(function () {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = "0";
    updateScreen(operation);

    $('.button').on('click', function(evt) {
        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "C") {
            result = 0;
            currentEntry = "0";
        } else if (buttonPressed === "CE") {
            currentEntry = "0";
        } else if (buttonPressed === "back") {
            currentEntry = currentEntry.substring(0, currentEntry.length - 1);
        } else if (buttonPressed === "+/-") {
            currentEntry *= -1;
        } else if (buttonPressed === '.') {
            currentEntry += '.';
        } else if (isNumber(buttonPressed)) {
            if (currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed;
        } else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = '';
        } else if (buttonPressed === '%') {
            currentEntry = currentEntry / 100;
        } else if (buttonPressed === "sqrt") {
            currentEntry = Math.sqrt(currentEntry);
        } else if (buttonPressed === "1/x") {
            currentEntry = 1 / currentEntry;
        } else if (buttonPressed === "pi") {
            currentEntry = Math.PI;
        } else if (buttonPressed === "=") {
            currentEntry = calculate(prevEntry, parseFloat(currentEntry), operation);
            operation = null;
        }
        updateScreen(currentEntry);
    });

    function isNumber(value) {
        return !isNaN(value);
    }

    function isOperator(value) {
        return value === '+' || value === '-' || value === '*' || value === '/';
    }

    function calculate(prev, curr, op) {
        switch (op) {
            case '+':
                return prev + curr;
            case '-':
                return prev - curr;
            case '*':
                return prev * curr;
            case '/':
                return prev / curr;
            default:
                return curr;
        }
    }

    function updateScreen(value) {
        $('.screen').html(value);
    }
});
