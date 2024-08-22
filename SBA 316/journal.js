/**
 * NOTES
 */

const log = document.getElementById("logEntries");
const form = document.getElementById("form");

form.addEventListener("submit", addEntryToJournal);

let entryCounter = 1;

function addEntryToJournal(e) {
  e.preventDefault();
  const title = document.getElementById("title");
  const textarea = document.getElementById("journalEntry");
  //not adding null title/entires
  if (title.value == "" || textarea.value == "") {
    console.log("type something");
    return;
  }

  const newSect = document.createElement("div");
  newSect.style.backgroundColor = "#eaeaea";
  newSect.setAttribute("id", entryCounter);
  newSect.classList.add("oneEntry"); //for fomatting an entry css
  const listAll = document.getElementById("logEntries");
  listAll.insertBefore(newSect, listAll.firstChild); //adding the newest entry at the top
  //add header break
  newSect.appendChild(document.createElement("hr"));
  //adding title
  const loggedTitle = document.createElement("h2");
  loggedTitle.textContent = `${title.value}`;
  newSect.appendChild(loggedTitle);
  title.value = "";

  //adding date
  const date = document.getElementById("entryDate");
  const loggedDate = document.createElement("p");
  loggedDate.style.color = "var(--date-color)";
  loggedDate.textContent = date.value;
  newSect.appendChild(loggedDate);

  //adding journal entry
  const loggedEntry = document.createElement("p");
  loggedEntry.textContent = textarea.value;
  newSect.appendChild(loggedEntry);
  textarea.value = "";

  //add delete button for entry
  const deleter = document.createElement("button");
  deleter.textContent = "delete entry";
  deleter.classList.add("delete");
  deleter.addEventListener("click", deleteEntryFromJournal);
  newSect.appendChild(deleter);

  entryCounter++;

  //show user successful log
  console.log("added entry");
}

function deleteEntryFromJournal(e) {
  e.stopPropagation();
  log.removeChild(e.target.parentNode);
}
// const title = document.getElementById("title").required = true
