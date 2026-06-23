const form = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const transactionList = document.getElementById("transaction-list");

let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

function updateLocalStorage() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

function renderTransactions() {
    transactionList.innerHTML = "";

    transactions.forEach((transaction, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${transaction.description}
            <span>
                ₹${transaction.amount}
                <button onclick="deleteTransaction(${index})">
                    X
                </button>
            </span>
        `;

        transactionList.appendChild(li);
    });

    updateSummary();
}

function updateSummary() {
    const amounts = transactions.map(
        transaction => transaction.amount
    );

    const balance = amounts.reduce(
        (total, amount) => total + amount,
        0
    );

    const income = amounts
        .filter(amount => amount > 0)
        .reduce((total, amount) => total + amount, 0);

    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((total, amount) => total + amount, 0);

    balanceEl.textContent = balance;
    incomeEl.textContent = `₹${income}`;
    expenseEl.textContent = `₹${Math.abs(expense)}`;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const description = descriptionInput.value;
    const amount = Number(amountInput.value);

    transactions.push({
        description,
        amount
    });

    updateLocalStorage();
    renderTransactions();

    descriptionInput.value = "";
    amountInput.value = "";
});

function deleteTransaction(index) {
    transactions = transactions.filter(
        (_, i) => i !== index
    );

    updateLocalStorage();
    renderTransactions();
}

renderTransactions();