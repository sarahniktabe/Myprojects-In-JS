function person(name, family, age, phone) {
  this.firstname = name;
  this.lastname = family;
  this.age = age;
  this.phone = phone;
}

var manager = new person("sara", "niktabe", 30, 09131231234);
var Employee1 = new person("soroush", "niktabe", 30, 09132342345);
var assistant = new person("ahmad", "niktabe", 50, 09131999990);
var helper= new person('mami', 'Joon', 45, 09131888888);

document.getElementById("showObjects1").innerHTML =
  manager.firstname +
  " " +
  manager.lastname +
  "-" +
  manager.age +
  " -->> " +
  manager.phone;

  document.getElementById("showObjects2").innerHTML =
  Employee1.firstname +
  " " +
  Employee1.lastname +
  "-" +
  Employee1.age +
  " -->> " +
  Employee1.phone;

  document.getElementById("showObjects3").innerHTML =
  assistant.firstname +
  " " +
  assistant.lastname +
  "-" +
  assistant.age +
  " -->> " +
  assistant.phone;

  document.getElementById("showObjects4").innerHTML =
 helper.firstname +
  " " +
  helper.lastname +
  "-" +
  helper.age +
  " -->> " +
  helper.phone;