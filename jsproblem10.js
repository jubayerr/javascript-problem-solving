// Coding challenge #10: Calculate the sum of numbers in an array of numbers


function sumArry(n) {
    var sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}

var numsArry = [5, 5, 5, 5, 5]
var result3 = sumArry(numsArry)
console.log("Calculate the sum of numbers in an array of numbers", result3);