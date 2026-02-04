function connect({host = 'localhost', port = 3000, secure = false} = {}) {
    if (typeof host !== 'string') {
        return 'Ошибка: host должен быть строкой';
    }
    if (typeof port !== 'number') {
        return 'Ошибка: port должен быть числом';
    }
    if (typeof secure !== 'boolean') {
        return 'Ошибка: secure должен быть булевым значением';
    }
    return `Connecting to ${host}:${port} (secure: ${secure})`;
}


console.log(connect({ host: 123 }));
console.log(connect({ host: 'example.com', port: 'abc' }));
console.log(connect({ host: 'example.com', port: 4000, secure: null }));
console.log(connect());
console.log(connect({}));
console.log(connect({ host: 'example.com', port: 4000, secure: true }));
