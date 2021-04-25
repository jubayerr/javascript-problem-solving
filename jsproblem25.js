// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

const numbers1 = [2, 3, 4, 5, 6]
const numbers2 = [7, 8, 4, 5, 10]

const mergeExclusive = (num1, num2) => {
    let exclusive = []

    for (let index = 0; index < num1.length; index++) {
        const element = num1[index];
        if (!num2.includes(element)) {
            exclusive.push(element)
        }
    }
    for (let index = 0; index < num2.length; index++) {
        const element = num2[index];
        if (!num1.includes(element)) {
            exclusive.push(element)
        }
    }
    return exclusive
}

const numbers3 = mergeExclusive(numbers1, numbers2)

console.log(numbers3);