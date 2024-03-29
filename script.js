let display = document.getElementById('display');
let expression = '';

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

// Add this code to your existing JavaScript file
function generateFibonacci() {
    let numberOfTerms = document.getElementById('fibonacciTerm').value;
    let resultElement = document.getElementById('fibonacciResult');

    if (numberOfTerms === '') {
        resultElement.textContent = 'Please enter the number of terms.';
        return;
    }

    numberOfTerms = parseInt(numberOfTerms);

    if (numberOfTerms <= 0) {
        resultElement.textContent = 'Please enter a positive number of terms.';
        return;
    }

    let fibonacciSeries = [0, 1];

    for (let i = 2; i < numberOfTerms; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    resultElement.textContent = `Fibonacci Series: ${fibonacciSeries.join(', ')}`;
}

// Add this code to your existing JavaScript file
function swapNumbers() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let resultElement = document.getElementById('swapResult');

    if (num1 === '' || num2 === '') {
        resultElement.textContent = 'Please enter both numbers.';
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    resultElement.textContent = `Before swapping: Number 1 = ${num1}, Number 2 = ${num2}`;

    // Swap without using a third variable
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    resultElement.textContent += `\nAfter swapping: Number 1 = ${num1}, Number 2 = ${num2}`;
}

// Add this code to your existing JavaScript file
function reverseString() {
    let inputStr = document.getElementById('inputString').value;
    let resultElement = document.getElementById('reverseResult');

    if (inputStr === '') {
        resultElement.textContent = 'Please enter a string.';
        return;
    }

    const reversedStr = inputStr.split('').reverse().join('');
    
    resultElement.textContent = `Original String: ${inputStr}\nReversed String: ${reversedStr}`;
}

// Add this code to your existing JavaScript file
function performArrayOperations() {
    let inputArrayStr = document.getElementById('arrayInput').value;
    let resultElement = document.getElementById('arrayResult');

    if (inputArrayStr === '') {
        resultElement.textContent = 'Please enter array elements.';
        return;
    }

    const inputArray = inputArrayStr.split(',').map(item => parseFloat(item.trim()));
    
    const sum = inputArray.reduce((acc, curr) => acc + curr, 0);
    const average = sum / inputArray.length;
    const maxElement = Math.max(...inputArray);

    resultElement.textContent = `Array: [${inputArray.join(', ')}]\nSum: ${sum}\nAverage: ${average.toFixed(2)}\nMax Element: ${maxElement}`;
}

// Add this code to your existing JavaScript file
function linearSearch() {
    let searchNum = document.getElementById('searchNumber').value;
    let resultElement = document.getElementById('linearSearchResult');

    if (searchNum === '') {
        resultElement.textContent = 'Please enter a number to search.';
        return;
    }

    searchNum = parseFloat(searchNum);
    
    const arrayToSearch = [/* Your array elements here */]; // Update with your array

    let found = false;
    let index = -1;

    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i] === searchNum) {
            found = true;
            index = i;
            break;
        }
    }

    if (found) {
        resultElement.textContent = `${searchNum} found at index ${index}.`;
    } else {
        resultElement.textContent = `${searchNum} not found in the array.`;
    }
}

// Add this code to your existing JavaScript file
function binarySearch() {
    let searchNumBinary = document.getElementById('searchNumberBinary').value;
    let resultElement = document.getElementById('binarySearchResult');

    if (searchNumBinary === '') {
        resultElement.textContent = 'Please enter a number to search.';
        return;
    }

    searchNumBinary = parseFloat(searchNumBinary);
    
    const sortedArray = [/* Your sorted array elements here */]; // Update with your sorted array

    let left = 0;
    let right = sortedArray.length - 1;
    let found = false;
    let index = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === searchNumBinary) {
            found = true;
            index = mid;
            break;
        } else if (sortedArray[mid] < searchNumBinary) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (found) {
        resultElement.textContent = `${searchNumBinary} found at index ${index}.`;
    } else {
        resultElement.textContent = `${searchNumBinary} not found in the array.`;
    }
}

// Add this code to your existing JavaScript file
function performBubbleSort() {
    let inputArrayBubbleSort = document.getElementById('arrayBubbleSort').value;
    let resultElement = document.getElementById('bubbleSortResult');

    if (inputArrayBubbleSort === '') {
        resultElement.textContent = 'Please enter array elements.';
        return;
    }

    const arrayToSort = inputArrayBubbleSort.split(',').map(item => parseFloat(item.trim()));
    
    for (let i = 0; i < arrayToSort.length - 1; i++) {
        for (let j = 0; j < arrayToSort.length - i - 1; j++) {
            if (arrayToSort[j] > arrayToSort[j + 1]) {
                // Swap if the element found is greater than the next element
                const temp = arrayToSort[j];
                arrayToSort[j] = arrayToSort[j + 1];
                arrayToSort[j + 1] = temp;
            }
        }
    }

    resultElement.textContent = `Sorted Array: [${arrayToSort.join(', ')}]`;
}

// Add this code to your existing JavaScript file
function performSelectionSort() {
    let inputArraySelectionSort = document.getElementById('arraySelectionSort').value;
    let resultElement = document.getElementById('selectionSortResult');

    if (inputArraySelectionSort === '') {
        resultElement.textContent = 'Please enter array elements.';
        return;
    }

    const arrayToSort = inputArraySelectionSort.split(',').map(item => parseFloat(item.trim()));
    
    for (let i = 0; i < arrayToSort.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrayToSort.length; j++) {
            if (arrayToSort[j] < arrayToSort[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        const temp = arrayToSort[i];
        arrayToSort[i] = arrayToSort[minIndex];
        arrayToSort[minIndex] = temp;
    }

    resultElement.textContent = `Sorted Array: [${arrayToSort.join(', ')}]`;
}

// Add this code to your existing JavaScript file
function performMatrixOperations() {
    let matrixInput = document.getElementById('matrixInput').value;
    let resultElement = document.getElementById('matrixOperationsResult');

    if (matrixInput === '') {
        resultElement.textContent = 'Please enter matrix elements.';
        return;
    }

    const matrixRows = matrixInput.split('\n').map(row => row.split(',').map(item => parseFloat(item.trim())));
    
    // Add matrix operations logic here (e.g., addition, subtraction, multiplication)

    // Example: Displaying the original matrix
    resultElement.textContent = 'Original Matrix:\n';
    matrixRows.forEach(row => {
        resultElement.textContent += `[${row.join(', ')}]\n`;
    });
}

// Add this code to your existing JavaScript file
function checkArmstrongNumber() {
    let inputArmstrongNumber = document.getElementById('armstrongNumber').value;
    let resultElement = document.getElementById('armstrongNumberResult');

    if (inputArmstrongNumber === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }

    inputArmstrongNumber = parseInt(inputArmstrongNumber);
    const numDigits = inputArmstrongNumber.toString().length;
    let temp = inputArmstrongNumber;
    let armstrongSum = 0;

    while (temp > 0) {
        const digit = temp % 10;
        armstrongSum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    if (armstrongSum === inputArmstrongNumber) {
        resultElement.textContent = `${inputArmstrongNumber} is an Armstrong number.`;
    } else {
        resultElement.textContent = `${inputArmstrongNumber} is not an Armstrong number.`;
    }
}

// Add this code to your existing JavaScript file
function concatenateStrings() {
    let str1 = document.getElementById('string1').value;
    let str2 = document.getElementById('string2').value;
    let resultElement = document.getElementById('concatenationResult');

    const concatenatedString = str1 + str2;

    if (str1 === '' || str2 === '') {
        resultElement.textContent = 'Please enter both strings.';
    } else {
        resultElement.textContent = `Concatenated String: ${concatenatedString}`;
    }
}

// Add this code to your existing JavaScript file
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function performLinkedListOperations(){
    let listInput = document.getElementById('listInput').value;
    let resultElement = document.getElementById('linkedListResult');

    if(listInput === ''){
        resultElement.textContent = 'PLease enter linked list element.';
        return;
    }

    const listElements = listInput.split(',').map(item => parseInt(item.trim()));
    let hed = createLinkedList(listElements);

    // Implement linked list operation as needed

    // Example: Displaying the linked list

    resultElement.textContent = 'Linked List: ';
    displayLInkedList(head);
}

function createLinkedList(elements) {
    if (elements.length === 0) {
        return null;
    }

    let head = new Node(elements[0]);
    let current = head;

    for(let i = 1; i < elements.length; i++){
        current.next = new Node(elements[i]);
        current = current.next;
    }

    return head;
}

function displayLInkedList(head){
    let current = head;
    while(current != null){
        resultElement.textContent += '${current.data} -> ';
        current = current.next;
    }
    resultElement.textContent += 'null';
}

// Add this code to your existing JavaScript file
function calculateGCD() {
    let num1 = document.getElementById('gcdNumber1').value;
    let num2 = document.getElementById('gcdNumber2').value;
    let resultElement = document.getElementById('gcdResult');

    if (num1 === '' || num2 === '') {
        resultElement.textContent = 'Please enter both numbers.';
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    const gcd = findGCD(num1, num2);

    resultElement.textContent = `GCD of ${num1} and ${num2} is: ${gcd}`;
}

function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

// Add this code to your existing JavaScript file
function calculateLCM() {
    let num1 = document.getElementById('lcmNumber1').value;
    let num2 = document.getElementById('lcmNumber2').value;
    let resultElement = document.getElementById('lcmResult');

    if (num1 === '' || num2 === '') {
        resultElement.textContent = 'Please enter both numbers.';
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    const lcm = findLCM(num1, num2);

    resultElement.textContent = `LCM of ${num1} and ${num2} is: ${lcm}`;
}

function findLCM(a, b) {
    // LCM is the product of the two numbers divided by their GCD
    return (a * b) / findGCD(a, b);
}

function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

// Add this code to your existing JavaScript file
function calculatePower() {
    let base = document.getElementById('base').value;
    let exponent = document.getElementById('exponent').value;
    let resultElement = document.getElementById('powerResult');

    if (base === '' || exponent === '') {
        resultElement.textContent = 'Please enter both the base and the exponent.';
        return;
    }

    base = parseFloat(base);
    exponent = parseInt(exponent);

    const power = calculatePowerFunction(base, exponent);

    resultElement.textContent = `${base}^${exponent} is: ${power}`;
}

function calculatePowerFunction(base, exponent) {
    return Math.pow(base, exponent);
}
