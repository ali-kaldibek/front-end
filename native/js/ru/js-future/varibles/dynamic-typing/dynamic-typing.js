// JavaScript динамически типизируемый язык.


/*
Статическая типизации :
String a = 'abc'
int b = 10
b = 'zxc' // Error
*/

/* 
Динамическая типизация :
a = 'abc'
a = 10
*/

// function dynamicTyping() {
//     console.log("This is a demonstration of dynamic typing in JavaScript.");
// }

// dynamicTyping();

// dynamicTyping = "Now I'm a string!";

// dynamicTyping(); // TypeError: dynamicTyping is not a function


// const - позволяет предотвратить возможные ошибки связанные с динамической типизацией
const constantFunction = function() {
    console.log("I am a constant function.");
};

constantFunction();

constantFunction = "Trying to change the function"; // TypeError: Assignment to constant variable.

// ПРАВИЛА РАБОТЫ С ДИНАМИЧЕСКОЙ ТИПИЗАЦИЕЙ
// 1. Все переменные объявлять перед их использованием.
// 2. Будьте внимательны при переопределении переменных.
// 3. Используйте const для функций и объектов, которые не должны изменяться.
// 4. Проверяйте типы данных при необходимости с помощью typeof или других методов. 