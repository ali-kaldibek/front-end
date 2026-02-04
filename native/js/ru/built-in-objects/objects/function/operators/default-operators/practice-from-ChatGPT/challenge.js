function user({ name, age = 0, city = "No city" }) {
    return { name, age, city };
}

function createUser(user) {
    return {...user}
}

console.log(createUser({ name: 'Ali', age: 21, city: 'Shymkent' }));
