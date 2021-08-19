// first we construct a prime number generator function
function* primeNumbersGenerator() {
  let i = 2;

  while (true) {
    //   we start, assuming the number we're going to check is a prime number
    let isPrimeNumber = true;

    // if the number can be divided by any other smaller number (except 1), then it's not prime
    for (let n = 2; n < i; n++) {
      if (i % n === 0) {
        // just found a number that is not prime
        isPrimeNumber = false;
      }
    }

    // now we're checking the flag `isPrimeNumber` - if it's true, we're going to yield it
    if (isPrimeNumber) {
      yield i;
    }
    // going to check the next i number
    i++;
  }
}

// ----------- some in-between TESTING
// testing the `primeNumbersGenerator` generator function
const [p1, p2, p3] = primeNumbersGenerator();
console.log([p1, p2, p3]);
// expected: [2, 3, 5]
// -----------

function giveNPrimeNumbers(N) {
  let primesArr = [null];
  let isPrime;

  // we use the generator function to yield N number of primes
  for (const prime of primeNumbersGenerator()) {
    // we push every new prime in an array
    primesArr.push(prime);
    // we allow for an extra first empty place in our array, which is going to remain empty
    if (primesArr.length === N + 1) {
      break;
    }
  }
  return primesArr;
}

// ----------- some in-between TESTING
giveNPrimeNumbers(3);
// expected: [ null, 2, 3, 5 ]
giveNPrimeNumbers(5);
// expected: [ null, 2, 3, 5, 7, 11 ]
giveNPrimeNumbers(17);
// expected: [ null, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59 ]
// -----------
