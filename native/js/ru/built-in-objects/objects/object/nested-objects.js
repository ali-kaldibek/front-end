// Вложенные объекты — это просто способ организовать данные в иерархическую структуру, вместо того чтобы всё хранить в одном плоском объекте.
// Вложенные объекты позволяют логически группировать связанные данные, что делает код более организованным и удобным для понимания. 
// Это особенно полезно при работе с комплексными структурами данных, такими как ответы от API или конфигурационные объекты.  

const user = {
    id: 1,
    name: "Ali",
    address: {               // Вложенный объект
        street: "Aidarly",
        city: "Shymkent",
        country: "Kazakhstan",
    },
    hobbies: ["coding", "gym", "learning"],
};

// Доступ к вложенным объектам
console.log(user.address.city); // dot-notation
console.log(user["address"]["city"]); // bracket-notation
// static-method Object.keys/values/entries()
console.log(Object.keys(user)); // Object.keys()
console.log(Object.values(user)); // Object.values()
console.log(Object.entries(user)); // Object.entries()

// // Изменение вложенных объектов
// user.address.city = "Almaty";
// console.log(user.address.city); // Almaty

// // Удаление свойства из вложенного объекта
// delete user.address.street;
// console.log(user.address.street); // undefined

