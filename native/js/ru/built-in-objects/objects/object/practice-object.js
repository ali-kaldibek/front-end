const myCity = {
    city: 'New York',
    country: 'USA',
}
// console.log(myCity.city);
// console.log(myCity);

delete myCity.country
// console.log(myCity);


myCity.city = 'Los Angeles';

// console.log(myCity.city);


const user = {
    id: 1,
}
const userName = 'Ali'
console.log(user);
console.log(user.id);


user[userName] = '22';


console.log(user);
console.log(user.Ali);

globalThis.console.log('Hello World');
