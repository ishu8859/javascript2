let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate() {
    try {
        expression = eval(expression);
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}

// Add this code to your existing JavaScript file
function calculateFactorial() {
    let inputNumber = document.getElementById('number').value;
    let resultElement = document.getElementById('result');

    if (inputNumber === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }

    inputNumber = parseInt(inputNumber);

    if (inputNumber < 0) {
        resultElement.textContent = 'Factorial is not defined for negative numbers.';
        return;
    }

    let factorialResult = 1;

    for (let i = 1; i <= inputNumber; i++) {
        factorialResult *= i;
    }

    resultElement.textContent = `Factorial of ${inputNumber} is: ${factorialResult}`;
}

// Add this code to your existing JavaScript file
function checkPrime() {
    let inputNumber = document.getElementById('primeNumber').value;
    let resultElement = document.getElementById('primeResult');

    if (inputNumber === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }

    inputNumber = parseInt(inputNumber);

    if (inputNumber <= 1) {
        resultElement.textContent = 'Please enter a number greater than 1.';
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(inputNumber); i++) {
        if (inputNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultElement.textContent = `${inputNumber} is a prime number.`;
    } else {
        resultElement.textContent = `${inputNumber} is not a prime number.`;
    }
}

// Add this code to your existing JavaScript file
function checkPalindrome() {
    let inputString = document.getElementById('inputPalindrome').value;
    let resultElement = document.getElementById('palindromeResult');

    if (inputString === '') {
        resultElement.textContent = 'Please enter a word or number.';
        return;
    }

    const cleanedString = inputString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');

    if (cleanedString === reversedString) {
        resultElement.textContent = `${inputString} is a palindrome.`;
    } else {
        resultElement.textContent = `${inputString} is not a palindrome.`;
    }
}
