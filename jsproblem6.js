// Coding challenge #6: Calculate 10!


let factorialNumber = 1;

for (let i = 1; i <= 10; i++) {
    factorialNumber = factorialNumber * i;
}

console.log("Calculate 10! = ", factorialNumber);

var sumOfOdd = 0
for (let i = 11; i <= 30; i += 2) {
    sumOfOdd += i;
}

console.log("sum of odd numbers greater than 10 and less than 30 = ", sumOfOdd);