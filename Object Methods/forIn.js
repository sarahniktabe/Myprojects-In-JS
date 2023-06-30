var address = {
  city: kerman,
  street: ahmadi,
  zipCode: 1233,
};

function showAdress(arg) {
  for (const key in arg) {
    console.log(`${key}: ${arg[key]}`);
  }
}
