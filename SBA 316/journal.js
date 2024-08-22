// const app = document.body.appendChild(document.createElement("div"))

// app.appendChild(document.createElement("ul"))


const log = document.getElementById("logEntries")
const submitBtn = document.getElementById("submit")
console.log(submitBtn)

const form = document.getElementById("form")
form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (input.value.trim() === '') {
      alert('Please fill out the input field!');
    } else {
      // Form submission logic goes here
      form.submit();
    }
  });
submitBtn.addEventListener("click", addEntryToJournal)
let entryCounter = 1;

function addEntryToJournal() {
    const newSect = document.createElement("div")
    newSect.setAttribute("id",entryCounter)
    newSect.classList.add("oneEntry") //for fomatting an entry css
    const listAll = document.getElementById("logEntries")
    listAll.insertBefore(newSect, listAll.firstChild) //adding the newest entry at the top
    
    //adding title
    const title = document.getElementById("title")
    const loggedTitle = document.createElement("h2")
    loggedTitle.textContent =`${title.value}`
    newSect.appendChild(loggedTitle)
    title.value =""
    
    //adding date
    const date = document.getElementById("entryDate")
    const loggedDate= document.createElement("p")
    loggedDate.style.color = "var(--date-color)";
    loggedDate.textContent = date.value;
    newSect.appendChild(loggedDate)

    //adding journal entry
    const textarea =  document.getElementById("journalEntry")
    const loggedEntry = document.createElement("p")
    loggedEntry.textContent = textarea.value;
    newSect.appendChild(loggedEntry)
    textarea.value = ""

    //add delete button for entry
    const deleter = document.createElement("button")
    deleter.textContent="delete entry"
    deleter.classList.add("delete")
    deleter.addEventListener("click", deleteEntryFromJournal)
    newSect.appendChild(deleter)
    //add header break
    newSect.appendChild(document.createElement("hr"))
    entryCounter++;

    //show user successful log
    console.log("added entry")
}


function deleteEntryFromJournal(e) {
    e.stopPropagation()
    log.removeChild(e.target.parentNode)
}
// const title = document.getElementById("title").required = true