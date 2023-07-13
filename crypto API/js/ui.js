class UI {
  printMessage(message, className) {
    let div = document.createElement("div");
    div.className = className;
    //div.innerHTML = message;
    div.appendChild(document.createTextNode(message))
    let showMessage = document.querySelector(".messages")
    showMessage.appendChild(div);
    this.removeMessage()
  }

  removeMessage(){
    setTimeout(() => {
        document.querySelector('.messages div').remove();
        }, 5000);
  }


  showResult(result, currency){
    console.log(result)

    let currencyName;
    if (currency == 'USD') {
        currencyName = 'Dollor'
    }
    if (currency == 'GBP') {
        currencyName = 'Pound'
    }
    if (currency == 'EUR') {
        currencyName = 'Euro'
    }
    
    let HTMLTemplate = `
        <div class= "card cyan darken-3>
            <div class="card-content white-text">
                <span class"card-title">Result</span>
                <img style="width: 50px" src"${result.logo_url}"
                <p>The Price of ${result.name} from ${currencyName} is: ${result.price}</p>
                <p>Last Hour: ${result["1h"].price_change}</p>
                <p>Last Day: ${result["1d"].price_change}</p>
                <p>Last Week: ${result["7d"].price_change}</p>
                <p>Last Month: ${result["30d"].price_change}</p>
            </div>
        </div>
    `
    console.log(HTMLTemplate)
}
}

