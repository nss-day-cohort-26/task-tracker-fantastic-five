const database = require("./database")

const loadDatabase = localStorageKey => {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
}

module.exports = loadDatabase