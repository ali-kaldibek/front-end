const user = {
    name: "Ali",
    age: 21,
    getInfo: function () {
        return `Имя: ${this.name}, возраст: ${this.age}`;
    },
    getUserInfo() {
        return `Имя: ${this.name}, возраст: ${this.age}`;
    },
};
console.log(user.getInfo());

console.log(user.getUserInfo());
