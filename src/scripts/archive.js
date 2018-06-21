let database = require("./database")
const loadDatabase = require("./loadLocal")
const saveDatabase = require("./saveLocal")

const archive = (id) => {
    console.log("archive btn")
    console.log("id:" id)
    if(localStorage.getItem("mykey") !== null){

        console.log("database loads")
        database = loadDatabase()
    }
    let myObj = {}
    for (item in database.done) {
        if (database.done[item].id.toString() === id.toString()) {
            myObj = database.done[item];
            delete database.done[item];
        }
    }
    database.archive[myObj.id] = myObj
    saveDatabase(database);
    document.getElementById("done").removeChild(document.getElementById(id))
}

module.exports = archive