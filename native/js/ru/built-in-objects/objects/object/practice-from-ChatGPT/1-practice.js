// ; Задание: “Профиль пользователя”
// ; 	1.	Создай объект user с такими свойствами:
// ; 	•	name (строка) — имя пользователя
// ; 	•	age (число) — возраст
// ; 	•	isStudent (булевое значение) — учится ли пользователь
// ; 	•	hobbies (массив) — любимые хобби (например, ["football", "music"])
// ; 	2.	Добавь метод sayHello, который выводит в консоль:

// ;     Привет, меня зовут <name> и мне <age> лет

// ;   3.	Добавь метод addHobby, который принимает строку и добавляет её в массив hobbies.
// ; 	4.	Напиши код, который:
// ; 	•	вызывает sayHello
// ; 	•	добавляет новое хобби "reading"
// ; 	•	выводит все хобби пользователя через console.log


const user = {
    name: 'Ali',
    age: 22,
    isStudent: true,
    hobbies: ['programming', 'gym', 'learning english'],
    sayHello() { 
        console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`)
    },
    addHobby(hobby) {
        this.hobbies.push(hobby)
    },
}



console.log(user)
user.sayHello()
user.addHobby('reading')
console.log(user)
