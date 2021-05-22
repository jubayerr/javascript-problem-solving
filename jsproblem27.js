// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

const nums = [2, 3, 5, 7, 11, 13, 5, 2, 7, 11, 23]

function getDictinctElements(elm) {
    let nums2 = []
    for (let i = 0; i < elm.length; i++) {
        if (!isInNum(elm[i], nums2)) {
            nums2.push(elm[i])
        }
    }
    return nums2
}

function isInNum(n, num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] === n)
            return true;
    }
    return false
}

const result = getDictinctElements(nums)
console.log(result);