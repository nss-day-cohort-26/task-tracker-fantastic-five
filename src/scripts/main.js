
var database = require("./database")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
const DOMTaskBuilder = require("./DOMTaskBuilder")
const modalMaker = require("./modal")
const archiveMode = require("./archiveMode")
const categoryMaker = require("./categoryMaker");
const dragDrop = require("./dragDrop")
const createCard = require("./createCard")
const graphs = require("./graphs")


if(localStorage.getItem("mykey") !== null){

    console.log("database loads")
    database = loadDatabase()

}

console.log("Loaded database:", database)

DOMTaskBuilder()
modalMaker.taskBtnCreator();
modalMaker.categoryBtnCreator();
// createCard(database, "toDo")
// createCard(database, "doing")
// createCard(database, "done")

console.log(database)

document.getElementById("insights").addEventListener("click", graphs)
document.getElementById("archives").addEventListener("click", archiveMode)

//run loadDatabase
//assign event listeners to nav
//domTaskBuilder
