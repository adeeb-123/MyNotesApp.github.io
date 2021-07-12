console.log("Welcome to Notes app ")
showNotes();
// If user clicks on the Add note button
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

// function to show Notes form LocalStorage

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let str = "";
    notesObj.forEach(function (element, index) {
        str = str + `
        <div class=" noteCard my-2 mx-1 card" style="width: 14rem;">
            <div class="card-body">
                <h6 class="card-title">Note${index + 1}</h6>
                <p class="card-text" id="card-id" >${element}</p>
                <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;

    });
    let noteElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElm.innerHTML = str;
    }
    else {
        noteElm.innerHTML = `<p>Nothing to show! Use "Add a Note" section above to add notes.</p>`;
    }

}

// If user Clicks Delete Note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Search Bar Code

let search = document.getElementById('searchtxt');
search.addEventListener("input", function() {
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element) {

        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        // console.log(cardTxt)

        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';

        }
    });
})