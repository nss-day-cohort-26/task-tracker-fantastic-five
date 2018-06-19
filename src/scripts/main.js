
const database = require("./database")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
// const DOMTaskBuilder = require("./DOMTaskBuilder")
const modalMaker = require("./modal")
const categoryMaker = require("./categoryMaker");

saveDatabase(database, "database")
loadDatabase("database")
// DOMTaskBuilder()
modalMaker.taskBtnCreator();
modalMaker.categoryBtnCreator();

//run loadDatabase
//assign event listeners to nav
//domTaskBuilder
