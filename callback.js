function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    // callback выполнится строго после выполнения действия выше
    callback()
}

// к анонимной функции невозможно обратиться после её выполнения
// learnJS('JavaScript', function() {
//     console.log(`Я прошёл этот урок!`);
// });

function done() {
    console.log('Я прошёл этот урок!')
}

// не ставим круглые скобки. функция просто передаётся как аргумент в качестве коллбэка
learnJS('JavaScript', done);

