// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

const numbers1 = [2, 3, 4, 5, 6]
const numbers2 = [7, 8, 4, 5, 10]

const mergeArray = (num1, num2) => {
    let numbers3 = []

    for (let i = 0; i < num1.length; i++) {
        const element = num1[i];
        numbers3.push(element)
    }

    for (let index = 0; index < num2.length; index++) {
        const element = num2[index];
        numbers3.push(element)
    }
    return numbers3
}

const numbers4 = mergeArray(numbers1, numbers2)

console.log(numbers4);