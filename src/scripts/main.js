
const database = require("./database")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
const DOMTaskBuilder = require("./DOMTaskBuilder")
const modalMaker = require("./modal")
const archiveMode = require("./archiveMode")
const categoryMaker = require("./categoryMaker");
const dragDrop = require("./dragDrop")

<<<<<<< HEAD
let localStorage = loadDatabase("database")
if(!localStorage) {
    localStorage = {}
    saveDatabase(database, "database")
}

archiveMode()
=======
if(localStorage.getItem("mykey") !== null){
    loadDatabase()
}

console.log("Loaded databse:", database)

>>>>>>> master
DOMTaskBuilder()
modalMaker.taskBtnCreator();
modalMaker.categoryBtnCreator();

<<<<<<< HEAD
=======
database.toDo[9] = {
    title: "Our first project",
    description: "Digging for gold",
    dueDate: "06/20/2018",
    dateCompleted: "",
    category: "uncategorized",
    id: 9
}

saveDatabase();
console.log(database)


>>>>>>> master
//run loadDatabase
//assign event listeners to nav
//domTaskBuilder
