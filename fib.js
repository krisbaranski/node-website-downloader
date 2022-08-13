// Write a function `fib()n` that takes a number as an argument and returns the nth Fibonacci number.
// n:      1  2  3  4  5  6   7   8   9
// fib()n: 1, 1, 2, 3, 5, 8, 13, 21, 34,...

// memoisation
// js object, keys will be the arg to fn, values will be the return value

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) {
    return 1;
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
console.log(fib(6));
console.log(fib(8));
console.log(fib(18));
console.log(fib(28));
console.log(fib(38));
console.log(fib(58));

// fib memoised complexity:
// O(n) time
// O(n) space
