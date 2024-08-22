// const app = document.body.appendChild(document.createElement("div"))

// app.appendChild(document.createElement("ul"))


const log = document.getElementById("logEntries")
const submitBtn = document.getElementById("submit")
console.log(submitBtn)


submitBtn.addEventListener("click", addEntryToJournal)
let entries = [];

function addEntryToJournal() {
    const newSect = document.createElement("div")
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

    //add header break
    newSect.appendChild(document.createElement("hr"))

//show user successful log
    console.log("added entry")
}

// const title = document.getElementById("title").required = true