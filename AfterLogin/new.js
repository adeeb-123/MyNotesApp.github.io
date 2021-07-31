console.log("Welcome to Notes app ")
let command = "white"
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

    let addTitleTxt = document.getElementById('addTitleTxt');
    let title = localStorage.getItem("title");
    if (title == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(title);
    }
    titleObj.push(addTitleTxt.value);
    localStorage.setItem('title', JSON.stringify(titleObj));
    addTitleTxt.value = "";
    console.log(titleObj);

    let TIME = new Date();
    let hrs = TIME.getHours();
    let min = TIME.getMinutes();
    let sec = TIME.getSeconds();
    let fulltime = hrs + ':' + min + ':' + sec
    // console.log(fulltime)

    let time = localStorage.getItem('TIME')
    if (time == null) {
        a = [];
    }
    else {
        a = JSON.parse(time)
    }
    a.push(fulltime)
    localStorage.setItem('TIME', JSON.stringify(a))
    console.log(a)

    let importance = localStorage.getItem('importance')
    if (importance == null) {
        imp_array = []
    }
    else {
        imp_array = JSON.parse(importance)
    }
    imp_array.push(command)
    localStorage.setItem('importance', JSON.stringify(imp_array))
    console.log(importance)

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

    let title = localStorage.getItem("title");
    if (title == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(title);
    }

    let TIME = new Date();
    let hrs = TIME.getHours();
    let min = TIME.getMinutes();
    let sec = TIME.getSeconds();
    let fulltime = hrs + ':' + min + ':' + sec
    // console.log(fulltime)

    let time = localStorage.getItem('TIME')
    if (time == null) {
        a = [];
    }
    else {
        a = JSON.parse(time)
    }

    let importance = localStorage.getItem('importance')
    if (importance == null) {
        imp_array = []
    }
    else {
        imp_array = JSON.parse(importance)
    }

    let str = "";
    notesObj.forEach(function (element, index) {
        str = str + `
        <div class=" noteCard my-2 mx-1 card" style="width: 14rem;">
            <div class="card-body">
                <h6 class="card-title">${titleObj[index]}</h6>
                <p class="card-text" id="card-id" >${element}</p>
                <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
            <div class="new_section" style = "display:flex;justify-content: space-between">
                <p id="time_box" style = "color:red;">Time :-${a[index]}</p>
                <img src="/images/${command}_star.png" id="${index}" onclick="ImpMark(this.id)" width = "20px" style="height:20px;align-self:center;box-shadow: 1px 2px gray; cursor:pointer;">
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

    let title = localStorage.getItem("title");
    if (title == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(title);
    }
    titleObj.splice(index, 1)
    localStorage.setItem('title', JSON.stringify(titleObj));

    let TIME = new Date();
    let hrs = TIME.getHours();
    let min = TIME.getMinutes();
    let sec = TIME.getSeconds();
    let fulltime = hrs + ':' + min + ':' + sec
    // console.log(fulltime)

    let time = localStorage.getItem('TIME')
    if (time == null) {
        a = [];
    }
    else {
        a = JSON.parse(time)
    }
    a.splice(index, 1)
    localStorage.setItem('TIME', JSON.stringify(a))

    let importance = localStorage.getItem('importance')
    if (importance == null) {
        imp_array = []
    }
    else {
        imp_array = JSON.parse(importance)
    }
    imp_array.splice(index, 1)
    localStorage.setItem('importance', JSON.stringify(imp_array))

    showNotes();
}

// Search Bar Code

let search = document.getElementById('searchtxt');
search.addEventListener("input", function () {
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {

        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        let TITLETXT = element.getElementsByTagName('h6')[0].innerText;
        // console.log(cardTxt)

        if (cardTxt.includes(inputVal) || (TITLETXT.includes(inputVal))) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';

        }
    });
})


// // Logic to Change the image of start from white to red when clicks on it
// let img_change = document.getElementById('image')
// img_change.addEventListener('click', function () {
//     if(img_change.src.match("images/red_star.png")){
//         img_change.src = "images/white_star.png"
//     }
//     else{
//         img_change.src = "images/red_star.png"
//         console.log("hiashdiashi")
//     }
// })


// Function to return

function success_signout() {
    swal({
        // title: "Good Job!",
        text: "SignOut Successfully",
        icon: "success",
        button: "OK",

    });
    setTimeout(backtohome, 2000);
}
function backtohome(){
    location.href = "../index.html"
}
