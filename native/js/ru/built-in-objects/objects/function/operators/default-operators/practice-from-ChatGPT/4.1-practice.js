function info(name, age) {
    if (typeof name !== 'string') {
        return 'Ошибка: аргумент name должно быт string!';
    }
    if (typeof age !== 'number') {
        return "Ошибка: аргумент age должно быт number!";
    }
    return `Имя: ${name}, возрасть: ${age}`;
}

console.log(info('Ali', 20));