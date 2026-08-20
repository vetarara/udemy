// ==========================================
// Counter
// ==========================================

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

// 1
createCounter()();
// 1
createCounter()();
// 1
counter();
// 2
counter();
// 3
counter();

// ==========================================
// Currency Counter
// ==========================================

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    console.log(result * discount);

    // в результате работы функции result будет возвращена эта внутренняя функция
    // return function(){}
}

convert(500, usdCurr);
convert(500, eurCurr);

// promotion(convert(500, usdCurr));
const res = convert(500, usdCurr);
promotion(res);

// ==========================================
// Empty function === undefined
// ==========================================

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('Done');
}

test()

function doNothing() { }
console.log(doNothing() === undefined);

// ==========================================
// Exercises
// ==========================================

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
function sayHello(name) {
    return `Привет, ${name}!`;
    // return "Привет, " + name + "!";
}

console.log(sayHello("Антон"));

// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: 
// одно на 1 меньше, сам аргумент, и число на 1 больше.

function returnNeighboringNumbers(num) {
    // let prevNumber = num - 1;
    // let nextNumber = num + 1;
    // let arr = [prevNumber, num, nextNumber];

    // return arr;
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба - числа. 
// Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
// Функция должна возвращать строку (или число в особых случаях, о которых ниже), 
// где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент.

function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            // последнее число, без дефисов в конце
            str += `${num * i}`;
        } else {
            str += `${num * i}---`
        }
    }

    return str;
}

console.log(getMathResult(5, 6));