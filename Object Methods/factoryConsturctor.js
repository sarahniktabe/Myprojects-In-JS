// factory
function createAddress(city, street, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}
console.log(createAddress("z", "x", "c"));

// consturctor
function CreateAddrees(city, street, zipcode) {
  (this.street = street), (this.city = city), (this.zipcode = zipcode);
}
var address = new CreateAddrees("z", "x", "c");
console.log(address);
