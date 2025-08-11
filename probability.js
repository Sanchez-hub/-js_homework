function checkProbabilityTheory(count) {
    let even = 0
    let odd = 0

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * 901) + 100 // від 100 до 1000
        if (num % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }

    console.log("Кількість згенерованих чисел: " + count)
    console.log("Парних чисел: " + even)
    console.log("Непарних чисел: " + odd)
    console.log("Відсоток парних: " + (even / count * 100) + "%")
    console.log("Відсоток непарних: " + (odd / count * 100) + "%")
}

// приклад
checkProbabilityTheory(1000)