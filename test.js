test('Testing the primes generator function:', () => {
  // equality does not work here, arrays are reference objects
  equal(giveNPrimeNumbers(3), [1, 2, 3, 5]);
  equalArrays(giveNPrimeNumbers(3), [1, 2, 3, 5]);
});
