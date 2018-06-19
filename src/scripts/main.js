
const database = require("./database")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
// const DOMTaskBuilder = require("./DOMTaskBuilder")
const modalMaker = require("./modal")
const archiveMode = require("./archiveMode")
const categoryMaker = require("./categoryMaker");


saveDatabase(database, "database")
loadDatabase("database")
archiveMode()
// DOMTaskBuilder()
modalMaker.taskBtnCreator();
modalMaker.categoryBtnCreator();

//run loadDatabase
//assign event listeners to nav
//domTaskBuilder
