function isPrime(n) {

    if(n < 2) return false
    if(n == 2) return true

    const root = Math.sqrt(n)

    for (let i = 2; i <= root; i++) {
        if(n % i === 0) return false   
    }

    return true
    
}


const result = isPrime(127)
console.log(result);