function persons(name, family, age, phone) {
    this.firstname = name;
    this.lastname = family;
    this.age = age;
    this.phone = phone;
  }
  

  var users=[];
  users.push(new persons('sara','niktabe', 30, 09131231234));
  users.push(new persons("soroush", "niktabe", 30, 09132342345));
  users.push(new persons("ahmad", "niktabe", 50, 09131999990));
  users.push(new persons('mami', 'Joon', 45, 09131888888));

  var text;
  for (x in users){
    text += users[x].firstname +" "+users[x].lastname+" - "+users[x].age+"  -->> "+users[x].phone + "<br/>";
  }
  document.getElementById('showObjects').innerHTML=text;