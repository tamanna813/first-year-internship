let notes =
JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes(){
    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );
}

function displayNotes(){

    const container =
    document.getElementById("notesContainer");

    container.innerHTML = "";

    notes.forEach((note,index)=>{

        container.innerHTML += `
            <div class="note">
                <p>${note}</p>

                <button onclick="editNote(${index})">
                    Edit
                </button>

                <button onclick="deleteNote(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function addNote(){

    const input =
    document.getElementById("noteInput");

    if(input.value.trim() === ""){
        return;
    }

    notes.push(input.value);

    saveNotes();
    displayNotes();

    input.value = "";
}

function editNote(index){

    const updatedNote =
    prompt("Edit your note:", notes[index]);

    if(updatedNote !== null){

        notes[index] = updatedNote;

        saveNotes();
        displayNotes();
    }
}

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();
    displayNotes();
}

displayNotes();