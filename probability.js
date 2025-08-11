function checkProbabilityTheory(count) {
    let evenCount = 0
    let oddCount = 0

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * 901) + 100 // від 100 до 1000
        if (num % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }

    console.log("Кількість згенерованих чисел: " + count)
    console.log("Парних чисел: " + evenCount)
    console.log("Непарних чисел: " + oddCount)
    console.log("Відсоток парних: " + (evenCount / count * 100) + "%")
    console.log("Відсоток непарних: " + (oddCount / count * 100) + "%")
}

// приклад
checkProbabilityTheory(1000)