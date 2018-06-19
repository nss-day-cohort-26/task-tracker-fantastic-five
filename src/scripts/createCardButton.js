const database = require("./database")
const createCard = require("./createCard")
const makeDate = require("./makeDate")

const createCardButton = () => {
    let title = document.getElementById("taskInput").value;
    let description = document.getElementById("descriptionInput").value;
    let dueDate = document.getElementById("dueDateInput").value;
    let category = document.getElementById("categoryInput").value;

    let valid = true;

    if (title.length < 1) {
        valid = false;
    }
    if (description.length < 1) {
        valid = false;
    }

    if (dueDate.length !== 10) {
        valid = false;
    } else if (dueDate.charAt(2) !== "/" && dueDate.charAt(5) !== "/") {
        valid = false;
    } else if (isNan(dueDate.slice(0, 2)) === true || isNan(dueDate.slice(3, 5)) === true || isNan(dueDate.slice(6)) === true) {
        valid = false;
    } else if (dueDate.slice(0, 2) < 1 || dueDate.slice(0, 2) > 12) {
        valid = false;
    } else if (dueDate.slice(3, 5) < 1 || dueDate.slice(3, 5) > 31) {
        valid = false;
    } else if (dueDate.slice(6) < 1990 || dueDate.slice(6) > 3000) {
        return false;
    }

    let myDate = makeDate();

    let myYear = myDate.slice(6, 10);
    let myDay = myDate.slice(3, 5);
    let myMonth = myDate.slice(0, 2);

    let objYear = dueDate.slice(6, 10);
    let objDay = dueDate.slice(3, 5);
    let objMonth = dueDate.slice(0, 2);

    if (myYear > objYear) {
        valid = false;
    } else if (objYear === myYear && myMonth > objMonth) {
        valid = false;
    } else if (objYear === myYear && myMonth === objMonth && myDay > objDay) {
        valid = false;
    }

    if (valid === true) {

        let newCard = Object.create(database.toDo);

        newCard.title = title;
        newCard.description = description;
        newCard.dueDate = dueDate;
        newCard.dateCompleted = "";
        newCard.category = category;
        newCard.id = database.currentId += 1;

        database.toDo[newCard.id] = newCard

        console.log(newCard)

        createCard(newCard, toDo)
    } else {
        alert("Invalid input")
    }
}



module.exports = createCardButton;