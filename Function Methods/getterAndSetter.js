let circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
  set area(value) {
    var num = value;
    this.radius = num;
  },
};

circle.radius = 5;

console.log(circle.area);
