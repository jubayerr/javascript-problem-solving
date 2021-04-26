// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

const numbers1 = [2, 3, 4, 5, 6]
const numbers2 = [7, 8, 4, 5, 10]


const mergeLeft = (num1, num2) => {
    let numbers = []

    for (let index = 0; index < num1.length; index++) {
        const element = num1[index];
        if (!num2.includes(element)) {
            numbers.push(element)
        }
    }
    return numbers
}

const numbers3 = mergeLeft(numbers1, numbers2)

console.log(numbers3);