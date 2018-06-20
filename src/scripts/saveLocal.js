let database = require("./database")

const saveDatabase = (db) => {
    console.log("saving")
    const stringifiedDatabase = JSON.stringify(db)
    localStorage.setItem("mykey", stringifiedDatabase)
}

module.exports = saveDatabase