// DOM elements
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalEl = document.getElementById("total");

// Store expenses
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let editId = null;

// Initial render
renderExpenses();

// Add / Update expense
addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;

    if (!title || amount <= 0 || !category || !date) {
        alert("Please fill all fields correctly");
        return;
    }

    if (editId) {
        // Update existing expense
        expenses = expenses.map(exp =>
            exp.id === editId ? { id: editId, title, amount, category, date } : exp
        );
        editId = null;
        addBtn.textContent = "Add Expense";
    } else {
        // Add new expense
        expenses.push({
            id: Date.now(),
            title,
            amount,
            category,
            date
        });
    }

    saveAndRender();
    clearInputs();
});

// Render expenses to UI
function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach(exp => {
        total += exp.amount;

        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <strong>${exp.title}</strong><br>
                ${exp.category} | ${exp.date} | ৳${exp.amount}
            </div>
            <div class="actions">
                <span class="edit">✏️</span>
                <span class="delete">❌</span>
            </div>
        `;

        // Edit
        li.querySelector(".edit").addEventListener("click", () => {
            titleInput.value = exp.title;
            amountInput.value = exp.amount;
            categoryInput.value = exp.category;
            dateInput.value = exp.date;
            editId = exp.id;
            addBtn.textContent = "Update Expense";
        });

        // Delete
        li.querySelector(".delete").addEventListener("click", () => {
            expenses = expenses.filter(e => e.id !== exp.id);
            saveAndRender();
        });

        expenseList.appendChild(li);
    });

    totalEl.textContent = total;
}

// Save to localStorage & re-render
function saveAndRender() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

// Clear input fields
function clearInputs() {
    titleInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
    dateInput.value = "";
}
