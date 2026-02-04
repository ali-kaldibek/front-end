// for (key in Object) {
//     Действия с каждым свойстом объекта
//     Значения свойства - Object[key]
// }

const myObject = {
    x: 10,
    y: true,
    z: 'abc',
}

for (const key in myObject) {
    console.log(key, myObject[key])
}

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc',
// }

// console.log(Object.keys(myObject))

// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key])
// })