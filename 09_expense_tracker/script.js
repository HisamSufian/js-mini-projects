// Select elements from DOM
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalEl = document.getElementById("total");

let total = 0;

// Add expense button click
addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);

    // Validation
    if (title === "" || amount <= 0) {
        alert("Please enter valid title and amount");
        return;
    }

    addExpense(title, amount);

    // Clear inputs
    titleInput.value = "";
    amountInput.value = "";
});

// Function to add expense to list
function addExpense(title, amount) {
    // Create list item
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${title} - ৳${amount}</span>
        <span class="delete">✖</span>
    `;

    // Delete expense
    li.querySelector(".delete").addEventListener("click", () => {
        expenseList.removeChild(li);
        total -= amount;
        updateTotal();
    });

    expenseList.appendChild(li);

    total += amount;
    updateTotal();
}

// Update total display
function updateTotal() {
    totalEl.textContent = total;
}
