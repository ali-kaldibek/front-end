function sum(a, b = 0) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Ошибка: оба аргумента должны быть числами.';
    }
    return a + b;
}

console.log(sum('abc'));
console.log(sum(5));
console.log(sum(5, 10));
