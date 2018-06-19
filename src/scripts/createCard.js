const makeDate = require("./makeDate")
const archiveMode = require("./archiveMode")
const dragFunc = require("./dragdrop")


const createCard = (obj, targetId) => {

    let createCardDiv = document.createElement("div")
    createCardDiv.id = obj.id
    createCardDiv.setAttribute("draggable", "true")
    createCardDiv.addEventListener("click", dragFunc)

    let nameP = document.createElement("p")
    nameP.textContent = obj.title
    createCardDiv.appendChild(nameP)

    let descP = document.createElement("p")
    descP.textContent = obj.description
    createCardDiv.appendChild(descP)


    let dueDateP = document.createElement("p")
    dueDateP.textContent = obj.dueDate
    createCardDiv.appendChild(dueDateP)

    let categoryP = document.createElement("p")
    categoryP.textContent = obj.category
    createCardDiv.appendChild(categoryP)

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
        archiveBtn.addEventListener("click", archiveMode)
        archiveBtn.textContent = "Archive"
        createCardDiv.appendChild(archiveBtn)
    }
    console.log(document.getElementById(targetId))

    document.getElementById(targetId).appendChild(createCardDiv)
}



module.exports = createCard