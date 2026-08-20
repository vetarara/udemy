// 1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i)
    }
}

// firstTask()

// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл

function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }

        console.log(i)
    }
}

// secondTask()

// 3. При помощи цикла for выведите чётные числа от 2 до 10 включительно

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// thirdTask()

// 4. Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. 
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        if (i % 2 !== 0) {
            console.log(i);
        }

        i++;
    }
}

// fourthTask()

// 5. Заполните массив цифрами от 5 до 10 включительно.
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 0; i <= 5; i++) {
        arrayOfNumbers[i] = i + 5;
    }
    return arrayOfNumbers;
}

// console.log(fifthTask());

// 6. Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, 
// к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

function sixthTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    let quantity = arr.length;

    for (let i = 0; i < quantity; i++) {
        result[i] = arr[i];
    }
    return result;
}

// console.log(sixthTask());

// 7. Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function seventhTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    let quantity = data.length;

    for (let i = 0; i < quantity; i++) {
        if (typeof data[i] === 'number' && !isNaN(data[i])) {
            result[i] = data[i] * 2;
        } else {
            result[i] = data[i] + ' - done';
        }
    }

    return result;
}

// console.log(seventhTask());

// 8. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function eighthTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    let quantity = data.length - 1;

    for (let i = quantity; i >= 0; i--) {
        result.push(data[i]);
    }
    return result;
}

// console.log(eighthTask());

// 9. Фигура

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i <= lines; i++) {
    // пробелы перед *. с каждой следующей строкой пробелов становится на один меньше
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    // на каждой следующей строке добавляется ещё 2 *
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }
    result += '\n'
}

console.log(result)

