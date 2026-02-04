function greet(name = "Гость") {
    if (typeof name !== "string") {
        return "Ошибка: имя должно быть строкой";
    }
    return `Привет, ${name}`;
}

console.log(greet());
console.log(greet(123));
console.log(greet("Ali"));
