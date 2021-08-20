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
  let primesArr = [' '];
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

function makePrimeTable(N) {
  const primesArray = giveNPrimeNumbers(N);
  // using a string variable which we are going to reuse every time we produce a new row of the table
  let rowOutput = '';

  // output the first row of primes - the original primes array
  primesArray.forEach((p) => (rowOutput += `${p} | `));
  console.log(rowOutput);
  rowOutput = ''; // cleaning the variable so we can re-use it

  // staring from the second element of the array - index = 1
  for (let i = 1; i < primesArray.length; i++) {
    // output the original element of the primes array vertically
    rowOutput += `${primesArray[i]} | `;
    // multiplying each subsequent element with all the primes of the original primes array
    for (let j = 1; j < primesArray.length; j++) {
      rowOutput += `${primesArray[i] * primesArray[j]} | `;
    }
    // output the new row
    console.log(rowOutput);
    rowOutput = ''; // cleaning the variable so we can re-use it
  }
}
