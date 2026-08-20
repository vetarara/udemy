'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function () {
        console.log('Test');
    }
};

console.log(options.name);


// удаляем свойство
delete options.name;


// перебираем все свойства

let counter = 0;

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        // перебор вложенного объекта
        for (let i in options[key]) {
            // console.log(options['colors']['border'])
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        // ${options[key] - значение ключа
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

// получаем массив со всеми ключами
console.log(Object.keys(options));

// узнаем количество ключей в массиве
console.log(Object.keys(options).length);

options.makeTest();


// Деструктуризация
// Вместо options['colors']['border']
const { border, bg } = options.colors;
console.log(border);

