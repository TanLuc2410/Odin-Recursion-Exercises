const fibonacci = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prevFib = fibonacci(n - 1);
  prevFib.push(prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]);

  return prevFib;
};

const fib10 = fibonacci(8);
console.log(fib10);
