// for (Начальная инструкция; Условие; Итерационное действие) {
//     Блок кода, выполняемый на каждой итерации
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

const myArray = [
    'first',
    'second',
    'third',
];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

myArray.forEach((element, index) => {
    console.log(element, index)
})