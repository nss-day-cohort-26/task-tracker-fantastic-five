const database = require("./database")

const saveDatabase = (databaseObject, localStorageKey) => {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

module.exports = saveDatabase