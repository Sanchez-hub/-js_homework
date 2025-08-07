function pow(x, y) {
    let result = 1;
    let i = 0;

    while (i < y) {
        result = result * x;
        i++;
    }

    return result;
}

// приклади
console.log(pow(2, 3)); // 8
console.log(pow(3, 4)); // 81
console.log(pow(5, 2)); // 25