// first I construct a prime number generator function
function* primeNumbersGenerator() {
  let i = 2;

  while (true) {
    //   I start, assuming the number I am going to check is a prime number
    let isPrimeNumber = true;

    // if the number can be divided by any other smaller number (except 1), then it's not prime
    for (let n = 2; n < i; n++) {
      if (i % n === 0) {
        // just found a number that is not prime
        isPrimeNumber = false;
      }
    }

    // now I am checking the flag `isPrimeNumber` - if it's true, I am going to yield it
    if (isPrimeNumber) {
      yield i;
    }
    // going to check the next i number
    i++;
  }
}

// testing the `primeNumbersGenerator` generator function
const [p1, p2, p3] = primeNumbersGenerator();
console.log([p1, p2, p3]);
// expected [2, 3, 5]
