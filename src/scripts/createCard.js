const makeDate = require("./makeDate")
const currentDate = require("./makeDate")
const archiveMode = require("./archiveMode")
const dragDrop = require("./dragDrop")

const createCard = (obj, targetId) => {

    let createCardDiv = document.createElement("div")
    createCardDiv.id = obj.id
    createCardDiv.ondragstart = dragDrop.drag
    createCardDiv.setAttribute("draggable", true)

    createCardDiv.setAttribute("class", "test")
    // createCardDiv.ondragstart = (event) => { //ondragstart attached to task
    //     console.log("drag started");
    //     event.dataTransfer.setData("text", event.target.classList);d

    // }

    let nameP = document.createElement("p")
    nameP.textContent = `Name: ${obj.title}`
    createCardDiv.appendChild(nameP)

    let descP = document.createElement("p")
    descP.textContent = `Description: ${obj.description}`
    createCardDiv.appendChild(descP)


    let dueDateP = document.createElement("p")
    dueDateP.textContent = `Due Date: ${obj.dueDate}`
    createCardDiv.appendChild(dueDateP)

    let categoryP = document.createElement("p")
    categoryP.textContent = `Category: ${obj.category}`
    createCardDiv.appendChild(categoryP)

    let timeStampP = document.createElement("p");
    timeStampP.textContent = `Date Created: ${currentDate()}`;
    createCardDiv.appendChild(timeStampP);

    //if the current date is past the due date create an overdue paragraph tag
    let myDate = makeDate();

    let myYear = myDate.slice(6, 10);
    let myDay = myDate.slice(3, 5);
    let myMonth = myDate.slice(0, 2);

    let objYear = obj.dueDate.slice(6, 10);
    let objDay = obj.dueDate.slice(3, 5);
    let objMonth = obj.dueDate.slice(0, 2);

    const overdueMessage = () => {
        let overdueP = document.createElement("p")
        overdueP.textContent = "This task is overdue."
        overdueP.style.color = "red"
        createCardDiv.appendChild(overdueP)

    }

    if (myYear > objYear) {
        overdueMessage()
    } else if (objYear === myYear && myMonth > objMonth) {
        overdueMessage()
    } else if (objYear === myYear && myMonth === objMonth && myDay > objDay) {
        overdueMessage()
    }
    if (targetId === "done") {
        let archiveBtn = document.createElement("button")
        archiveBtn.type = "button";
        archiveBtn.addEventListener("click", function(){archive(obj.id)})
        archiveBtn.textContent = "Archive"
        createCardDiv.appendChild(archiveBtn)
    }

    document.getElementById(targetId).appendChild(createCardDiv)

}



module.exports = createCard