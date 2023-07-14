class UI {
  printMessage(message, className) {
    let div = document.createElement("div");
    div.className = className;
    //div.innerHTML = message;
    div.appendChild(document.createTextNode(message));
    let showMessage = document.querySelector(".messages");
    showMessage.appendChild(div);
    this.removeMessage();
  }

  removeMessage() {
    setTimeout(() => {
      document.querySelector(".messages div").remove();
    }, 5000);
  }

  creatTemplate(result, currency) {
    console.log(result);

    const prevResult = document.querySelector('#result div')
    if (prevResult) {
        prevResult.remove()
    }
    

    let currencyName;
    if (currency == "USD") {
      currencyName = "Dollor";
    }
    if (currency == "GBP") {
      currencyName = "Pound";
    }
    if (currency == "EUR") {
      currencyName = "Euro";
    }

    let HTMLTemplate = `
        <div class= "card cyan darken-3">
            <div class="card-content white-text">
                <h4 class"card-title">Result</h4>
                <img style="width: 50px" src="${result.logo_url}">
                <p>The Price of ${result.name} from ${currencyName} is: ${result.price}</p>
                <p>Last Hour: ${result["1h"].price_change}</p>
                <p>Last Day: ${result["1d"].price_change}</p>
                <p>Last Week: ${result["7d"].price_change}</p>
                <p>Last Month: ${result["30d"].price_change}</p>
            </div>
        </div>
    `;
    this.showSpinner();
    this.showResult(HTMLTemplate);
  }

  showSpinner() {
    const spinnerGif = document.createElement("img");
    spinnerGif.src = "img/spinner.gif";
    document.querySelector(".spinner").appendChild(spinnerGif);
  }
  showResult(HTMLTemplate) {
    setTimeout(() => {
      document.querySelector(".spinner img").remove();
      const resulrDiv = (document.querySelector("#result").innerHTML = HTMLTemplate);
    }, 2000);
  }
}
