
let product1 = "pitzza";
let price1 = 60;
let product2 = "coca";
let price2 = 20;
let total = price1 + price2;

let html1 = `
<ul>
<li>${product1}: ${price1}</li>
<li>${product2}: ${price2}</li>
<li>Total :${total}</li>
</ul>

`;

let app = document.getElementById("addtemp");
app.innerHTML = html1