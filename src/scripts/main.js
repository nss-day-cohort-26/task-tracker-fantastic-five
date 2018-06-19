
const database = require("./database")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
const DOMTaskBuilder = require("./DOMTaskBuilder")
const modalMaker = require("./modal")

saveDatabase(database, "database")
loadDatabase("database")
// DOMTaskBuilder()
modalMaker.taskBtnCreator()

//run loadDatabase
//assign event listeners to nav
//domTaskBuilder
