
var database = require("./database")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
const DOMTaskBuilder = require("./DOMTaskBuilder")
const modalMaker = require("./modal")
const archiveMode = require("./archiveMode")
const categoryMaker = require("./categoryMaker");
const dragDrop = require("./dragDrop")
const graphs = require("./graphs")


if(localStorage.getItem("mykey") !== null){
    console.log("database loads")
    database = loadDatabase()
}

console.log("Loaded databse:", database)

DOMTaskBuilder()
modalMaker.taskBtnCreator();
modalMaker.categoryBtnCreator();

console.log(database)

document.getElementById("insights").addEventListener("click", graphs)
document.getElementById("archives").addEventListener("click", archiveMode)

//run loadDatabase
//assign event listeners to nav
//domTaskBuilder
