// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

// get fibonacci with recursion
function findFibonacci(n) {
    if (n == 0)
        return 0;

    if (n == 1)
        return 1;

    return findFibonacci(n - 1) + findFibonacci(n - 2)
}

const result = findFibonacci(10)
console.log(result);

// // get fibonacci without recursion
// var fibo1 = 0;
// var fibo2 = 1;

// for (let i = 2; i < 10; i++) {
//     var fibonacci = fibo2 + fibo1
//     fibo1 = fibo2
//     fibo2 = fibonacci
//     console.log(fibonacci);
// }
