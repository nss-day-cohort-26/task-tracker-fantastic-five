const createCard = require("./createCard")
const makeDate = require("./makeDate")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
let database = require("./database")


const createCardButton = () => {
    if(localStorage.getItem("mykey") !== null){
        console.log("database loads")
        database = loadDatabase()
    }
    console.log("Createcardbutton runs")
    let title = document.getElementById("taskInput").value;
    let description = document.getElementById("descriptionInput").value;
    let dueDate = document.getElementById("dueDateInput").value;
    let category = document.getElementById("taskDropDown").value;

    let valid = true;

    if (title.length < 1) {
        valid = false;
    }
    if (description.length < 1) {
        valid = false;
    }

    if (dueDate.length !== 10) {
        valid = false;
        console.log("1")
    } else if (dueDate.charAt(2) !== "/" && dueDate.charAt(5) !== "/") {
        valid = false;
        console.log("2")
    } else if (isNaN(dueDate.slice(0, 2)) === true || isNaN(dueDate.slice(3, 5)) === true || isNaN(dueDate.slice(6)) === true) {
        valid = false;
        console.log("3")
    } else if (dueDate.slice(0, 2) < 1 || dueDate.slice(0, 2) > 12) {
        valid = false;
        console.log("4")
    } else if (dueDate.slice(3, 5) < 1 || dueDate.slice(3, 5) > 31) {
        valid = false;
        console.log("5")
    } else if (dueDate.slice(6) < 1990 || dueDate.slice(6) > 3000) {
        valid = false;
        console.log("6")
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
        console.log("7")
    } else if (objYear === myYear && myMonth > objMonth) {
        valid = false;
        console.log("8")
    } else if (objYear === myYear && myMonth === objMonth && myDay > objDay) {
        valid = false;
        console.log("9")
    }

    if (valid === true) {
        console.log("making new card")

        let newCard = Object.create(database.toDo);

        newCard.title = title;
        newCard.description = description;
        newCard.dueDate = dueDate;
        newCard.dateCompleted = "";
        newCard.category = category; //fix this later
        newCard.id = database.currentId;

        database.toDo[newCard.id] = newCard
        if(database.currentId.isNaN){
            let p = parseInt(database.currentId)
        } else {
            p = database.currentId;
        }
        p++
        database.currentId = p;

        saveDatabase(database)

        createCard(newCard, "toDo")
    } else {
        if ((title === "") && (description === "") &&  (dueDate === "")) {
            alert("Invalid input");
        } else if (title === "") {
            alert("Please add a Title for your task");
        } else if (description === "") {
            alert("Please add a Description for your task");
        } else if (dueDate === "") {
            alert("Please add a Due Date for your task");
        } else {
            alert("Invalid input")
        }
    }
}

module.exports = createCardButton;