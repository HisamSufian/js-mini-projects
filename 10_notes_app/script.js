// DOM elements
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const searchInput = document.getElementById("searchInput");

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Initial render
renderNotes(notes);

// Add note
addBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();

    if (text === "") {
        alert("Note cannot be empty");
        return;
    }

    notes.push({
        id: Date.now(),
        text
    });

    saveNotes();
    noteInput.value = "";
});

// Search notes
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = notes.filter(note =>
        note.text.toLowerCase().includes(query)
    );
    renderNotes(filtered);
});

// Render notes to UI
function renderNotes(list) {
    notesContainer.innerHTML = "";

    list.forEach(note => {
        const div = document.createElement("div");
        div.className = "note";
        div.innerHTML = `
            ${note.text}
            <span>❌</span>
        `;

        // Delete note
        div.querySelector("span").addEventListener("click", () => {
            notes = notes.filter(n => n.id !== note.id);
            saveNotes();
        });

        notesContainer.appendChild(div);
    });
}

// Save notes to localStorage and re-render
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes(notes);
}
