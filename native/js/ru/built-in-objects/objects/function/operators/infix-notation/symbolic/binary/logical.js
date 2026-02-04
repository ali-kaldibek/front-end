/// Логические операторы

/// ИЛИ ||
/// И ИЛИ &&
/// НЕ ! 


// && - оператор "И" (AND)
// && serching first false valeue
false && true // false
true && false // false
true && true // true
false && false // false

// || - оператор "ИЛИ" (OR)
// || serching first true valeue
false || true // true
true || false // true
true || true // true
false || false // false

// ! - оператор "НЕ" (NOT)
!true // false
!false // true

// !! - двойное отрицание, преобразует значение в булево
!!true // true
!!false // false
!!0 // false
!!1 // true
!!'' // false
!!'text' // true
!!null // false
!!undefined // false
!!{} // true
!![] // true

