
var database = require("./database")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
const DOMTaskBuilder = require("./DOMTaskBuilder")
const modalMaker = require("./modal")
const archiveMode = require("./archiveMode")
const categoryMaker = require("./categoryMaker");
const dragDrop = require("./dragDrop")

if(localStorage.getItem("mykey") !== null){

    console.log("database loads")
    database = loadDatabase()

}

console.log("Loaded databse:", database)

DOMTaskBuilder()
modalMaker.taskBtnCreator();
modalMaker.categoryBtnCreator();

database.toDo[9] = {
    title: "Our first project",
    description: "Digging for gold",
    dueDate: "06/20/2018",
    dateCompleted: "",
    category: "uncategorized",
    id: 9
}

console.log(database)


//run loadDatabase
//assign event listeners to nav
//domTaskBuilder
