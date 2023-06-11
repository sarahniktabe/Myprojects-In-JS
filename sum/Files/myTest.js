function sum() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var lbl = document.getElementById('lblSum');
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var sum = num1 + num2;
  lbl.innerHTML = sum;
 
}
