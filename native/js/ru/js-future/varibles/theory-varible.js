// Переменные дают возможность повторного доступа к значениям

// Style Naming Varibles
// PascalCase - типы и классы
// DB_PASSWORD - значения известны до запуска приложения и не меняются
// camelCase - все остальные переменные

// ПРАВИЛА РАБОТЫ С ПЕРЕМЕННЫМИ В JS

// 1. Имена переменных чувствительны к регистру
let myVariable = 10;
let MyVariable = 20; // Это разные переменные

// 2. Имена переменных не могут начинаться с цифры
// let 1stVariable = 30; // SyntaxError

// 3. Имена переменных могут содержать буквы, цифры, $, _
let $dollarVar = 40;
let _underscoreVar = 50;
let alpha123 = 60;

// 4. Рекомендуется использовать осмысленные имена переменных
let userAge = 25; // Хорошее имя
let x = 30; // Плохое имя

// 5. Используйте camelCase для именования переменных
let firstName = "John";
let lastName = "Doe";

// Выводим переменные в консоль
console.log(myVariable); // 10
console.log(MyVariable); // 20
console.log($dollarVar); // 40
console.log(_underscoreVar); // 50
console.log(alpha123); // 60
console.log(userAge); // 25
console.log(firstName); // John
console.log(lastName); // Doe                   