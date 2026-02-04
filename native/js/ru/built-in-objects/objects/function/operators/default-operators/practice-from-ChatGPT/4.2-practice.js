function order(product, price = 0) {
    if (typeof product !== 'string') {
        return "Ошибка: аргумент product должно быт string";
    }
    if (typeof price !== 'number') {
        return "Ошибка: аргумент price должно быт number!";
    }
    return `Товар: ${product}, цена: ${price}$`
}

console.log(order('Phone'));