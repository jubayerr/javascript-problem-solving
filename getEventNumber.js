// Get Event Numbers from an arry

function getPositive(arr) {
    var positiveNumber = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element % 2 == 0) {
            positiveNumber.push(element)
        }
    }
    return positiveNumber;
}

var myNumbers = [1, 2, 3, 4, 9, 10, 15, 90];

var result = getPositive(myNumbers)

console.log(result);