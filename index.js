// 'number' + 3 + 3
// Спочатку 'number' + 3 → 'number3' (3 перетворюється в рядок)
// Потім 'number3' + 3 → 'number33'
// Результат: 'number33'
console.log('number' + 3 + 3); // 'number33'

// null + 3
// null → 0 у числових операціях
// 0 + 3 → 3
console.log(null + 3); // 3

// 5 && "qwerty"
// 5 → true, повертається останній true-операнд → "qwerty"
console.log(5 && "qwerty"); // "qwerty"

// +'40' + +'2' + "hillel"
// +'40' → 40, +'2' → 2
// 40 + 2 = 42
// 42 + "hillel" → "42hillel"
console.log(+'40' + +'2' + "hillel"); // "42hillel"

// '10' - 5 === 6
// '10' → 10, 10 - 5 = 5
// 5 === 6 → false
console.log('10' - 5 === 6); // false

// true + false
// true → 1, false → 0
// 1 + 0 = 1
console.log(true + false); // 1

// '4px' - 3
// '4px' не можна перетворити у число → NaN
// NaN - 3 → NaN
console.log('4px' - 3); // NaN

// '4' - 3
// '4' → 4, 4 - 3 = 1
console.log('4' - 3); // 1

// '6' + 3 ** 0
// 3 ** 0 → 1
// '6' + 1 → '61'
console.log('6' + 3 ** 0); // '61'

// 12 / '6'
// '6' → 6, 12 / 6 = 2
console.log(12 / '6'); // 2

// '10' + (5 === 6)
// 5 === 6 → false
// '10' + false → '10false'
console.log('10' + (5 === 6)); // '10false'

// null == ''
// null == undefined → true, але null != ''
// Результат: false
console.log(null == ''); // false

// 3 ** (9 / 3)
// 9 / 3 = 3, 3 ** 3 = 27
console.log(3 ** (9 / 3)); // 27

// !!'false' == !!'true'
// 'false' і 'true' — непорожні рядки → true
// !!'false' → true, !!'true' → true
// true == true → true
console.log(!!'false' == !!'true'); // true

// 0 || '0' && 1
// '0' && 1 → 1 (обидва truthy)
// 0 || 1 → 1
console.log(0 || '0' && 1); // 1

// (+null == false) < 1
// +null → 0, false → 0 → 0 == 0 → true → true → 1
// 1 < 1 → false
console.log((+null == false) < 1); // false

// false && true || true
// false && true → false
// false || true → true
console.log(false && true || true); // true

// false && (false || true)
// (false || true) → true
// false && true → false
console.log(false && (false || true)); // false

// (+null == false) < 1 ** 5
// +null → 0, false → 0 → 0 == 0 → true → 1
// 1 ** 5 = 1 → 1 < 1 → false
console.log((+null == false) < 1 ** 5); // false
