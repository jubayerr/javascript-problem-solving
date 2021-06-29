// Print distances between the first n prime numbers

function printDistances(n) {
    var lastPrime = 2
    var i = lastPrime + 1
    var foundPrimes = 1

    while(foundPrimes < n) {
        if(isPrime(i)){
            console.log(i - lastPrime, '\t',  i, ' - ' ,lastPrime);

            foundPrimes++
            lastPrime = i
        }
        i++
    }
}

function isPrime(n) {
    
    if(n < 2) return false
    if(n == 2) return true

    const root = Math.sqrt(n)

    for (let i = 2; i <= root; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}


const result = printDistances(100)
console.log(result)



