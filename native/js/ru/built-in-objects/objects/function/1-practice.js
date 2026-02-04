const userOne = {
    name: 'Ali',
    age: 21,
}

// function (user) {

// }

function addAge(userOne) {
    const updateAge = JSON.parse(JSON.stringify(userOne));
    updateAge.age += 1;
    return updateAge;
}

console.log(userOne);
const updateAgeUserOne = addAge(userOne);
console.log(updateAgeUserOne);