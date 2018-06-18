const database = require("./database")
const saveDatabase = require("./saveLocal")
const loadDatabase = require("./loadLocal")
const DOMTaskBuilder = require("./DOMTaskBuilder")

saveDatabase(database, "database")
loadDatabase("database")

//run loadDatabase
//assign event listeners to nav
//domTaskBuilder
