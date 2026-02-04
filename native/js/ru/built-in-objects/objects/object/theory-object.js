// Практически все сущности в JavaScript - Objects (Объекты)

// Это объекты они являются либо объект им Явно
// Либо же ведут себя как объекты

/*

Объект - набор свойств "Имя: Значение"
                        "key: "value"
Syntax:
{
    key: "value",
    key: "value",
    {
        key: "value",
        key: "value",
    }
}

For Example:
{
    lang: "JavaSript",
    extension: ".js, .mjs, .cjs"
    author: "Brendan Eich",
    firstAppeared: "4 December 1995",
    standart: {
        name: "ECMAScript",
        extension: ".es"
    }
}

// Объект - тип значений
// Oбъект - тип переменных

// Есть ли каокое-то свойтсво содержит функцию как значение такое сввойтсво называется Методом
{
    key: function() {
        // тело функции
    }
}

For Example:
{
    greet: function(name) {
        console.log("Hello, " + name + "!");
    }
}

*/

// Объекты в JS могут быть различных типов:

// Простые Объекты - это объекты созданные с помощью Литералов Объектов {}
let obj1 = {
    key1: "value1",
    key2: "value2"
};

// Встроенные Объекты (Built-in Objects) - объекты которые предоставляет сам JS
let obj2 = new Date(); // Объект Дата
let obj3 = /abc/;     // Объект Регулярное выражение

// Пользовательские Объекты (User-defined Objects) - объекты которые создаем мы сами
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let obj4 = new Person("Alice", 25);

// Все Объекты в JS наследуются от Object.prototype
let obj5 = {};
console.log(Object.getPrototypeOf(obj5) === Object.prototype); // true      



// Object - это Объект  
// Массив - это Объект
// Функция - это Объект

// Число - это Объекты *
// Строка - это Объекты *
// * ведут себя как Объект
// На самом деле значение типа число либо строка это Примитивное значение

// 

// Есть 2 типа Объектов в JS:
// 1. Встроенные Объекты (Built-in Objects) - объекты которые предоставляет сам JS
// 2. Пользовательские Объекты (User-defined Objects) - объекты которые создаем мы сами

// Встроенные Объекты (Built-in Objects):

/*
  Object
  Function
  Boolean
  Symbol
  Error
  EvalError
  RangeError
  ReferenceError
  SyntaxError
  TypeError
  URIError
  Number
  BigInt
  Math
  Date
  String
  RegExp
  Array
  Int8Array
  Uint8Array
  Uint8ClampedArray
  Int16Array
  Uint16Array
  Int32Array
  Uint32Array
  Float32Array
  Float64Array
  BigInt64Array
  BigUint64Array
  Map
  Set
  WeakMap
  WeakSet
  ArrayBuffer
  SharedArrayBuffer
  Atomics
  DataView
  JSON
  Promise
  Generator
  GeneratorFunction
  AsyncFunction
  Reflect
  Proxy
  Intl
  WebAssembly
*/

// Пользовательские Объекты (User-defined Objects):
/*
Создаются с помощью:
1. Литералов Объектов {}
2. Функций-конструкторов
3. Классов
4. Object.create()
*/

// Пример создания Пользовательского Объекта с помощью Литерала Объекта
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person);
person.greet();

// Пример создания Пользовательского Объекта с помощью Функции-конструктора
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar);

// Пример создания Пользовательского Объекта с помощью Класса
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(this.name + " makes a noise.");
    }
}

let dog = new Animal("Rex", "Dog");
console.log(dog);
dog.speak();

// Пример создания Пользовательского Объекта с помощью Object.create()
let proto = {
    describe: function() {
        console.log("This is a " + this.type);
    }
};

let obj = Object.create(proto);
obj.type = "Custom Object";
obj.describe();             


