// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(10, 'increment') will eventually return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter');

const count = new counter();

// Test 1: Increment
test('the counter will eventually return to 4 after incrementing', () => {
  return expect(counter(4, 'increment')).resolves.toBe(4);
});

// Test 2: Decrement
test('the counter will eventually return to 0 after decrementing', () => {
  return expect(counter(4, 'decrement')).resolves.toBe(0);
});
