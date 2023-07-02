function sum(...items) {
    
  if (items.length === 0 && Array.isArray(items[0])) {
    console.log(items)
    items = [...items[0]];
  }
  console.log(items);
  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4, 5, 6]));
