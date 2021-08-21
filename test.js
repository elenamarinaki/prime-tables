test('Testing the primes generator function:', () => {
  // equality does not work here, arrays are reference objects
  equal(giveNPrimeNumbers(3), [1, 2, 3, 5]);
  // the same comparison passes when using the `notEqual` testing function
  notEqual(giveNPrimeNumbers(3), [1, 2, 3, 5]);
  // another way to do this would be to specify position in the array - BUT we'd have to do this for all array elements.
  equal(giveNPrimeNumbers(3)[2], [1, 2, 3, 5][2]);
  equal(giveNPrimeNumbers(3)[1], [1, 2, 3, 5][1]);

  // so I made a new testing function `equalArrays` that does exactly that!
  // TESTING ARRAYS ...
  // expected to PASS ..
  equalArrays(giveNPrimeNumbers(3), [1, 2, 3, 5]);
  equalArrays(giveNPrimeNumbers(10), [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  equalArrays(giveNPrimeNumbers(7), [1, 2, 3, 5, 7, 11, 13, 17]);
  equalArrays(
    giveNPrimeNumbers(13),
    [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
  );
  // expected to FAIL ...
  equalArrays(giveNPrimeNumbers(12), [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  equalArrays(
    giveNPrimeNumbers(15),
    [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
  );
});
