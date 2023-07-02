function sum(...items) {
  console.log(items);
  return items.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 6));
