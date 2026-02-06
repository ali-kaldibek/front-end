function checkAccess(age) {
    if (typeof age !== 'number') {
        return 'Возраст должен быть числом';
    }
    if (age >= 18) {
        return onSuccess();
    }
    return onFail();
}

function onSuccess() {
    return 'Доступ разрешён';
}
function onFail() {
    return 'Доступ запрещён';
}

console.log(checkAccess('abc'));
console.log(checkAccess(17));
console.log(checkAccess(19));
