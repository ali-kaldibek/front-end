// if (Условие 1) {
//     Блок кода, выполняемый однократно, если Условие 1 правдиво
// } else if (Условие 2) {
//     Блок кода, выполняемый однократно, если Условие 2 правдиво
// } else {
//     Блок кода, выполняемый однократно, если предыдущие условия ложны
// }

// const age = 7;

// if (age > 18) {
//     console.log("Is adult");
// } else if (age >= 12) {
//     console.log("Is teenager");
// } else {
//     console.log("Is child");
// }





const age = 19;

if (age >= 18) {
    console.log("Is adult");
} 

if (age >= 12 && age < 18) {
    console.log("Is teenager");
} 

if (age < 12) {
    console.log("Is child");
}