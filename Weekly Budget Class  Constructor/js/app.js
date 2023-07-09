//classes

class Budget {
  constructor(budget) {
    this.budget = budget;
    this.budgetleft = this.budget;
  }
  subtractFromBudget(amount) {
    return this.budgetleft -= amount;
  }
}

class HTML {
  //insert the user budget
  insertBudget(amount) {
    budgetTotal.innerHTML = amount;
    budgetLeft.innerHTML = amount;
  }
  //message
  printMessage(message, className) {
    let div = document.createElement("div");
    div.innerHTML = message;
    //div.appendChild(document.createTextNode(message));  //or we can use this method
    div.classList.add("alert", "center", className);
    let primary = document.querySelector(".primary");
    primary.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
      //form.reset();
    }, 3000);
  }

  //dispaly expense to the list
  insertExpense(name, amount) {
    let expenses = document.querySelector("#expenses ul");
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items";
    li.innerHTML = `
    ${name}
    <span class="badge badge-primary badge-pill">${amount}</span> 
    `;
    expenses.appendChild(li);
  }

  //subtract budget amount
  trackBudget(amount) {
    let budgetLeftToman = budget.subtractFromBudget(amount);
    budgetLeft.innerHTML = `${budgetLeftToman}`;

    //change color of budgetleft
    if ((budget.budget / 4) > budgetLeftTomans ) {
      // if less than 25% budget left change color to the danger
      budgetLeft.parentElement.parentElement.classList.remove('alert-success' , 'alert-warning')
      budgetLeft.parentElement.parentElement.classList.add('alert-danger')
      
  } else if ((budget.budget / 2) > budgetLeftTomans ){
      // if less than 50% budget left change color to the warning
      budgetLeft.parentElement.parentElement.classList.remove('alert-success')
      budgetLeft.parentElement.parentElement.classList.add('alert-warning')
  }
  }
}

//variables
let userBudget;
let budget;
let html = new HTML();
let userBuget = prompt("لطفا بودجه خود را وارد کنید:");
let budgetTotal = document.querySelector("span#total");
let budgetLeft = document.querySelector("span#left");
let form = document.querySelector("#add-expense");

//addEventListeners
eventListener();
function eventListener() {
  //take alert for getting user budget
  document.addEventListener("DOMContentLoaded", function () {
    //let userBuget = prompt("لطفا بودجه خود را وارد کنید:");

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

    if (expense === "" || amount === "") {
      html.printMessage("پر کردن همه موارد الزامی است.", "alert-danger");
    } else {
      html.insertExpense(expense, amount);
      html.trackBudget(amount);
    }
  });
}
