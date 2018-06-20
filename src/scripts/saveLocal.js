const database = require("./database")

const saveDatabase = () => {
    console.log("saving")
    const stringifiedDatabase = JSON.stringify(database)
    localStorage.setItem("mykey", stringifiedDatabase)
}

module.exports = saveDatabase