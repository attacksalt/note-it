const addNoteBtn = document.querySelector("#add-note");
const notesList = document.querySelector("#notes-list");

const noteForm = {
    title: document.querySelector("#note-title"),
    description: document.querySelector("#note-description"),
    update: function() {
        this.title = document.querySelector("#note-title");
        this.description = document.querySelector("#note-description");
    },

}

addNoteBtn.addEventListener('click', (()=>{
    noteForm.update();
    makeNote(noteForm)}
))

function newNote(title, description) {
    const note = {
        title,
        description
    }
    note.modify = function(newdesc) {
        note.description = newdesc;
    }
    return note;
}

function addNote(note) /* to dom */ {
    const holder = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    title.textContent = note.title;
    description.textContent = note.description;
    holder.appendChild(title);
    holder.appendChild(description);
    notesList.appendChild(holder);

    return {
        delete: function() {
            this.node.remove();
        },
        node: holder,
        titleNode: title,
        descriptionNode: description,
        modify: function(note) {
            this.titleNode.textContent = note.title;
            this.descriptionNode.textContent = note.description;
        }
    };
}

function makeNote(form) {
    addNote(
        newNote(form.title.value, form.description.value)
    )
    console.warn(form.title.value);
}