(function () {
  state = document.getElementById("s-state");
  document.getElementById("cart-hplus").addEventListener("submit", caltotal);
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("btn-estimate");
    btn.disabled = true;
    state.addEventListener("change", function () {
      if (state.value === "") {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    });
  });

  function caltotal(event) {
    event.preventDefault();
    if (state.value === "") {
      document.getElementById("noSelected").innerHTML =
        "*Please you should choose your state.";
      document.getElementById("noSelected").style.color = "red";
      document.getElementById("noSelected").style.fontSize = "20px";
      state.focus();
    }

    var itemBball =
        parseInt(document.getElementById("txt-q-bball").value, 10) || 0,
      itemJersey =
        parseInt(document.getElementById("txt-q-jersey").value, 10) || 0,
      itemPower =
        parseInt(document.getElementById("txt-q-power").value, 10) || 0,
      shippingState = state.value,
      shippingMethod =
        document.querySelector("[name=r_method]:checked").value || "";

    var totalQTY = itemBball + itemJersey + itemPower,
      shippingCostPer,
      shippingCost,
      taxFactor = 1,
      estimate,
      totalItemPrice = 90 * itemBball + 25 * itemJersey + 30 * itemPower;

    if (shippingState === "CA") {
      taxFactor = 1.075;
    }

    switch (shippingMethod) {
      case "usps":
        shippingCostPer = 2;
        break;
      case "ups":
        shippingCostPer = 3;
        break;
      default:
        shippingCostPer = 0;
        break;
    }

    shippingCost = shippingCostPer * totalQTY;
    estimate = "$" + (totalItemPrice * taxFactor + shippingCost).toFixed(2);

    document.getElementById("txt-estimate").value = estimate;
var result = document.getElementById('results');
result.innerHTML = 'total items: $'+ totalQTY + '<br/>';
result.innerHTML += 'total shipping: ' + shippingCost.toFixed(2) + '<br/>';
result.innerHTML += 'tax: ' + ((taxFactor -1)* 100).toFixed(2) + '%(' + shippingState + ')';
  }
})();
