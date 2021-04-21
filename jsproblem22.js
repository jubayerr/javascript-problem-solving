// Coding challenge #22: Reverse an array

let numbers = [1, 2, 3, 4, 5]

function reverseArray(arr) {
    let numbers2 = []

    for (let i = arr.length - 1; i >= 0; i--) {
        numbers2.push(arr[i])
    }
    return numbers2
}

let numbers3 = reverseArray(numbers)
console.log(numbers3);