//classes

class Budget {
  constructor(budget) {
    this.budget = budget;
  }
}

class HTML {
  insertBudget(amount) {
    budgetTotal.innerHTML = amount;
    budgetLeft.innerHTML = amount;
  }
}

//variables
let userBudget;
let budget;
let html = new HTML();
let budgetTotal = document.querySelector("span#total");
let budgetLeft = document.querySelector("span#left");
let form = document.querySelector("#add-expense");

//addEventListeners
eventListener();
function eventListener() {
  //take alert for getting user budget
  document.addEventListener("DOMContentLoaded", function () {
    let userBuget = prompt("لطفا بودجه خود را وارد کنید:");

    //validate user budget
    if (userBuget === "" || userBuget === "0" || userBuget === null) {
      window.location.reload();
    } else {
      //
      let budget = new Budget(userBuget);
      //onsole.log(budget);
      html.insertBudget(budget.budget);
      //console.log(budget)
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let expense = document.querySelector("#expense").value;
    let amount = document.querySelector("#amount").value;

    console.log(expense);
    console.log(amount);
  });
}
