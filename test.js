function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}
